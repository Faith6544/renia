export default function Stars({
  count = 5,
  className = "h-4 w-4",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <span
      className="flex items-center gap-1 text-gold"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className={className}
        >
          <path d="M12 2.5l2.9 6.06 6.6.86-4.84 4.57 1.23 6.51L12 17.43 6.11 20.5l1.23-6.51L2.5 9.42l6.6-.86L12 2.5Z" />
        </svg>
      ))}
    </span>
  );
}
