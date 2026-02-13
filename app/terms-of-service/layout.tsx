import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms of service for Bar Moon Contracting website and services.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
