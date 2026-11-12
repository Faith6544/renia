"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { User } from "@supabase/supabase-js";

import { useLanguage } from "@/context/LanguageContext";
import { isAdminUser } from "@/lib/auth";
import {
  buildStoragePath,
  GALLERY_BUCKET,
  getMediaKind,
  listRecentMedia,
  MAX_MEDIA_BYTES,
  MEDIA_ACCEPT,
  type MediaItem,
} from "@/lib/media";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

type AccessState = "checking" | "ready" | "signed-out" | "denied" | "no-config";

type AdminMessage = {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  service_type: string | null;
  message: string | null;
  created_at: string | null;
};

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function AccessPanel({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-4 pb-16 pt-28 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,160,89,0.18),transparent_55%)]"
      />
      <div className="relative w-full max-w-lg rounded-[2rem] border border-line/70 bg-white/90 p-8 text-center shadow-[0_30px_80px_rgba(8,35,20,0.12)] sm:p-10">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-forest font-serif text-lg text-gold">
          R
        </span>
        <p className="eyebrow mt-6 text-gold">{eyebrow}</p>
        <h1 className="mt-4 text-balance font-serif text-3xl leading-[1.08] tracking-[-0.02em]">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-stone">{text}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">{children}</div>
      </div>
    </main>
  );
}

export default function AdminDashboard() {
  const { t, language } = useLanguage();
  const admin = t.admin;

  const [access, setAccess] = useState<AccessState>(
    () => (isSupabaseConfigured() ? "checking" : "no-config"),
  );
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<AdminMessage[]>([]);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [messagesError, setMessagesError] = useState(false);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [mediaLoading, setMediaLoading] = useState(false);
  const [mediaError, setMediaError] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [deletingPath, setDeletingPath] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadMessages = useCallback(async () => {
    setMessagesLoading(true);
    setMessagesError(false);

    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error } = await supabase
        .from("quote_requests")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(25);

      if (error) throw error;
      setMessages((data ?? []) as AdminMessage[]);
    } catch (error) {
      console.error("Admin messages load failed:", error);
      setMessagesError(true);
    } finally {
      setMessagesLoading(false);
    }
  }, []);

  const loadMedia = useCallback(async () => {
    setMediaLoading(true);
    setMediaError(false);

    try {
      const supabase = getSupabaseBrowserClient();
      const items = await listRecentMedia(supabase, 60);
      setMedia(items);
    } catch (error) {
      console.error("Admin media load failed:", error);
      setMediaError(true);
    } finally {
      setMediaLoading(false);
    }
  }, []);

  const loadData = useCallback(async () => {
    void loadMessages();
    void loadMedia();
  }, [loadMessages, loadMedia]);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      return;
    }

    let active = true;
    let unsubscribe: (() => void) | undefined;

    try {
      const supabase = getSupabaseBrowserClient();

      const resolveUser = (nextUser: User | null) => {
        if (!active) return;

        setUser(nextUser);

        const nextAccess = !nextUser
          ? "signed-out"
          : isAdminUser(nextUser)
            ? "ready"
            : "denied";

        if (nextAccess === "ready") {
          void loadData();
        }

        setAccess(nextAccess);
      };

      supabase.auth.getSession().then(({ data }) => {
        resolveUser(data.session?.user ?? null);
      });

      const { data: listener } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          resolveUser(session?.user ?? null);
        },
      );

      unsubscribe = () => listener.subscription.unsubscribe();
    } catch (error) {
      console.error("Admin session failed:", error);
    }

    return () => {
      active = false;
      unsubscribe?.();
    };
  }, [loadData]);

  async function handleUpload() {
    setUploadNotice(null);
    setUploadError(null);

    if (!selectedFile) {
      return;
    }

    const kind = getMediaKind(selectedFile.name, selectedFile.type);

    if (!kind) {
      setUploadError(admin.uploadTypeError);
      return;
    }

    if (selectedFile.size > MAX_MEDIA_BYTES) {
      setUploadError(admin.uploadSizeError);
      return;
    }

    setUploading(true);

    try {
      const supabase = getSupabaseBrowserClient();
      const path = buildStoragePath(selectedFile.name);

      const { error } = await supabase.storage
        .from(GALLERY_BUCKET)
        .upload(path, selectedFile, {
          cacheControl: "3600",
          upsert: false,
          contentType: selectedFile.type || undefined,
        });

      if (error) throw error;

      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setUploadNotice(admin.uploadSuccess);
      await loadMedia();
    } catch (error) {
      console.error("Gallery upload failed:", error);
      setUploadError(admin.uploadError);
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(item: MediaItem) {
    if (!window.confirm(`${admin.delete} “${item.name}”?`)) {
      return;
    }

    setDeletingPath(item.path);

    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.storage
        .from(GALLERY_BUCKET)
        .remove([item.path]);

      if (error) throw error;

      setMedia((current) => current.filter((entry) => entry.path !== item.path));
    } catch (error) {
      console.error("Gallery delete failed:", error);
      setMediaError(true);
    } finally {
      setDeletingPath(null);
    }
  }

  async function handleSignOut() {
    try {
      const supabase = getSupabaseBrowserClient();
      await supabase.auth.signOut();
      setUser(null);
      setAccess("signed-out");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  }

  const formatDate = (value: string | null) => {
    if (!value) {
      return "—";
    }

    try {
      return new Intl.DateTimeFormat(
        language === "fr" ? "fr-FR" : "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        },
      ).format(new Date(value));
    } catch {
      return value;
    }
  };

  if (access === "checking") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-cream px-6 pt-24">
        <div className="flex items-center gap-3 rounded-full border border-line bg-white px-6 py-4 text-sm text-stone shadow-[0_16px_40px_rgba(8,35,20,0.08)]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
          {admin.eyebrow} · {admin.title}
        </div>
      </main>
    );
  }

  if (access === "no-config") {
    return (
      <AccessPanel
        eyebrow={admin.eyebrow}
        title={admin.signInTitle}
        text={t.auth.setup}
      >
        <Link href="/" className="pill-link">
          {t.auth.backHome} →
        </Link>
      </AccessPanel>
    );
  }

  if (access === "signed-out") {
    return (
      <AccessPanel
        eyebrow={admin.eyebrow}
        title={admin.signInTitle}
        text={admin.signInText}
      >
        <Link href="/login" className="btn btn-dark">
          {admin.signInCta} →
        </Link>
        <Link href="/" className="pill-link">
          {t.auth.backHome}
        </Link>
      </AccessPanel>
    );
  }

  if (access === "denied") {
    return (
      <AccessPanel
        eyebrow={admin.eyebrow}
        title={admin.deniedTitle}
        text={admin.deniedText}
      >
        <p className="w-full text-xs uppercase tracking-[0.18em] text-stone">
          {admin.welcome} {user?.email}
        </p>
        <button type="button" onClick={handleSignOut} className="btn btn-dark">
          {admin.signOut}
        </button>
        <Link href="/" className="pill-link">
          {t.auth.backHome}
        </Link>
      </AccessPanel>
    );
  }

  return (
    <main className="min-h-screen bg-cream pb-16 pt-28 lg:pb-24 lg:pt-32">
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-gold">{admin.eyebrow}</p>
            <h1 className="mt-4 text-balance font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-[1.03] tracking-[-0.02em]">
              {admin.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone">
              {admin.intro}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="max-w-full truncate rounded-full border border-line bg-white px-4 py-2 text-xs text-stone">
              {admin.welcome}{" "}
              <strong className="font-medium text-ink">{user?.email}</strong>
            </span>
            <button
              type="button"
              onClick={handleSignOut}
              className="pill-link text-xs"
            >
              {admin.signOut}
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <p className="text-xs uppercase tracking-[0.2em] text-stone">
              {admin.messagesTitle}
            </p>
            <p className="mt-4 font-serif text-4xl text-forest">
              {messages.length}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <p className="text-xs uppercase tracking-[0.2em] text-stone">
              {admin.mediaTitle}
            </p>
            <p className="mt-4 font-serif text-4xl text-forest">{media.length}</p>
          </div>
          <div className="rounded-2xl bg-forest p-6 text-cream shadow-[0_8px_30px_rgba(8,35,20,0.18)]">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Supabase Storage
            </p>
            <p className="mt-4 truncate font-serif text-2xl">{GALLERY_BUCKET}</p>
            <p className="mt-2 text-xs leading-relaxed text-cream/60">
              gallery/
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <section className="rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-8 lg:col-span-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gold">
                  {admin.messagesEyebrow}
                </p>
                <h2 className="mt-3 font-serif text-2xl leading-tight tracking-[-0.01em] sm:text-3xl">
                  {admin.messagesTitle}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => void loadMessages()}
                disabled={messagesLoading}
                className="pill-link text-xs disabled:opacity-60"
              >
                {admin.refresh}
              </button>
            </div>

            {messagesError ? (
              <p className="mt-6 rounded-xl bg-[#8a2f2a]/10 px-4 py-3 text-sm leading-relaxed text-[#8a2f2a]">
                {admin.messagesError}
              </p>
            ) : null}

            {messagesLoading ? (
              <p className="mt-8 text-sm text-stone">{admin.refresh}…</p>
            ) : null}

            {!messagesLoading && !messagesError && messages.length === 0 ? (
              <p className="mt-8 text-sm text-stone">{admin.messagesEmpty}</p>
            ) : null}

            <div className="mt-6 max-h-[38rem] space-y-4 overflow-y-auto pr-1">
              {messages.map((message) => (
                <article
                  key={message.id}
                  className="rounded-2xl bg-cream p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-serif text-lg leading-tight">
                        {message.full_name || "—"}
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone">
                        {message.service_type || "contact"}
                      </p>
                    </div>
                    <time className="text-xs text-stone/80">
                      {formatDate(message.created_at)}
                    </time>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone">
                    {message.email ? (
                      <a
                        href={`mailto:${message.email}`}
                        className="transition-colors hover:text-gold"
                      >
                        {message.email}
                      </a>
                    ) : null}
                    {message.phone ? (
                      <a
                        href={`tel:${message.phone}`}
                        className="transition-colors hover:text-gold"
                      >
                        {message.phone}
                      </a>
                    ) : null}
                  </div>

                  {message.message ? (
                    <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink/80">
                      {message.message}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-8 lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">
              {admin.uploadEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-2xl leading-tight tracking-[-0.01em] sm:text-3xl">
              {admin.uploadTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              {admin.uploadText}
            </p>

            <div className="mt-6">
              <label htmlFor="admin-file" className="field-label">
                {admin.fileLabel}
              </label>
              <input
                ref={fileInputRef}
                id="admin-file"
                type="file"
                accept={MEDIA_ACCEPT}
                onChange={(event) => {
                  setSelectedFile(event.target.files?.[0] ?? null);
                  setUploadError(null);
                  setUploadNotice(null);
                }}
                className="block w-full cursor-pointer rounded-xl border border-dashed border-line bg-cream px-4 py-4 text-sm text-stone transition-colors file:mr-4 file:rounded-full file:border-0 file:bg-forest file:px-4 file:py-2 file:text-[10px] file:font-medium file:uppercase file:tracking-[0.16em] file:text-cream hover:border-gold/50"
              />
              <p className="mt-2 text-xs leading-relaxed text-stone/70">
                {admin.fileHint}
              </p>
            </div>

            {selectedFile ? (
              <p className="mt-3 truncate text-xs text-stone">
                {selectedFile.name} · {formatBytes(selectedFile.size)}
              </p>
            ) : null}

            <div aria-live="polite" className="mt-4 space-y-3">
              {uploadError ? (
                <p
                  role="alert"
                  className="rounded-xl bg-[#8a2f2a]/10 px-4 py-3 text-sm leading-relaxed text-[#8a2f2a]"
                >
                  {uploadError}
                </p>
              ) : null}
              {uploadNotice ? (
                <p
                  role="status"
                  className="rounded-xl bg-gold/10 px-4 py-3 text-sm leading-relaxed text-stone"
                >
                  {uploadNotice}
                </p>
              ) : null}
            </div>

            <button
              type="button"
              onClick={handleUpload}
              disabled={!selectedFile || uploading}
              className="btn btn-dark mt-5 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {uploading ? admin.uploading : admin.uploadCta}
              <span aria-hidden="true">↑</span>
            </button>

            <p className="mt-5 rounded-xl bg-cream px-4 py-3 text-xs leading-relaxed text-stone/80">
              {admin.storageSetup}
            </p>
          </section>
        </div>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-gold">
                {admin.mediaEyebrow}
              </p>
              <h2 className="mt-3 font-serif text-2xl leading-tight tracking-[-0.01em] sm:text-3xl">
                {admin.mediaTitle}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => void loadMedia()}
              disabled={mediaLoading}
              className="pill-link text-xs disabled:opacity-60"
            >
              {admin.refresh}
            </button>
          </div>

          {mediaError ? (
            <p className="mt-6 rounded-xl bg-[#8a2f2a]/10 px-4 py-3 text-sm leading-relaxed text-[#8a2f2a]">
              {admin.mediaError}
            </p>
          ) : null}

          {!mediaLoading && !mediaError && media.length === 0 ? (
            <p className="mt-8 text-sm text-stone">{admin.mediaEmpty}</p>
          ) : null}

          {media.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {media.map((item) => (
                <article
                  key={item.path}
                  className="overflow-hidden rounded-2xl bg-cream shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
                >
                  <div className="relative aspect-[4/3] bg-forest">
                    {item.kind === "video" ? (
                      <video
                        src={item.url}
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={item.url}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    )}
                    <span className="absolute left-3 top-3 rounded-full bg-forest/80 px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-cream backdrop-blur-sm">
                      {item.kind === "video"
                        ? t.gallery.videoLabel
                        : t.gallery.imageLabel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 px-4 py-3">
                    <p className="truncate text-xs text-stone">{item.name}</p>
                    <div className="flex shrink-0 items-center gap-3">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] uppercase tracking-[0.14em] text-forest transition-colors hover:text-gold"
                      >
                        {admin.open}
                      </a>
                      <button
                        type="button"
                        onClick={() => handleDelete(item)}
                        disabled={deletingPath === item.path}
                        className="text-[10px] uppercase tracking-[0.14em] text-[#8a2f2a] transition-colors hover:text-[#b03a33] disabled:opacity-50"
                      >
                        {deletingPath === item.path
                          ? admin.deleting
                          : admin.delete}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}
