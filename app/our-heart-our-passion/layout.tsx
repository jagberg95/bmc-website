import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Heart & Our Passion",
  description:
    "Discover the values that drive Bar Moon Contracting — integrity, stewardship, quality craftsmanship, and a deep commitment to Central Texas community.",
  openGraph: {
    title: "Our Heart & Our Passion | Bar Moon Contracting",
    description:
      "Building with purpose, responsibility & care. Learn about our values and what drives us.",
  },
  alternates: {
    canonical: "/our-heart-our-passion",
  },
};

export default function OurHeartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
