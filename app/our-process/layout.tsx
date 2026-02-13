import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "See how Bar Moon Contracting works — from first handshake to final walkthrough. Our 7-step process ensures clear communication, quality craftsmanship, and on-time delivery.",
  openGraph: {
    title: "Our Process | Bar Moon Contracting",
    description:
      "From first handshake to final walkthrough — here's how we build your dream, step by step.",
  },
  alternates: {
    canonical: "/our-process",
  },
};

export default function OurProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
