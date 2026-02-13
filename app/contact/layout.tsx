import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bar Moon Contracting. Call 254-581-3808 or fill out our contact form. Central Texas custom homes, renovations, outdoor living & repairs.",
  openGraph: {
    title: "Contact Bar Moon Contracting",
    description:
      "Ready to start your project? Call 254-581-3808 or send us a message. No pressure, just honest conversation.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
