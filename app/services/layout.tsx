import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Bar Moon Contracting services: custom home building, upgrades & renovations, outdoor living, and home repairs. Central Texas craftsmanship you can count on.",
  openGraph: {
    title: "Services | Bar Moon Contracting",
    description:
      "Custom homes, renovations, outdoor living, and home repairs — Texas craftsmanship for every project.",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
