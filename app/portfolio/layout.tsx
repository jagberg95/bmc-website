import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects - Bar Moon Contracting",
  description:
    "Explore a showcase of Bar Moon Contracting's past projects, highlighting our commitment to quality craftsmanship in custom homes, renovations, and outdoor living.",
  robots: "noindex",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
