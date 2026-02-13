import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for Bar Moon Contracting. Learn how we collect, use, and protect your personal information.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
