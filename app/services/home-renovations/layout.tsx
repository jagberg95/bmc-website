import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upgrades & Renovations",
  description:
    "Transform your home with Bar Moon Contracting. Kitchen & bathroom remodels, flooring, layout modifications, and whole-house renovations in Central Texas.",
  openGraph: {
    title: "Upgrades & Renovations | Bar Moon Contracting",
    description:
      "From kitchen remodels to whole-house transformations — clear planning, quality materials, and workmanship built to last.",
  },
  alternates: {
    canonical: "/services/home-renovations",
  },
};

export default function HomeRenovationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
