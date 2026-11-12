export type ServiceType = "home" | "pro";

export interface QuoteRequest {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  service_type: ServiceType;
  message: string;
  created_at: string;
}

/** Shape used when creating a quote request from the form. */
export type NewQuoteRequest = Omit<QuoteRequest, "id" | "created_at">;

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string | null;
  bio: string | null;
  created_at: string | null;
}
