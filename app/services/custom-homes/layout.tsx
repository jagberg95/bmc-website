import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Home Building",
  description:
    "Design and build your dream custom home in Central Texas with Bar Moon Contracting. Full design-build service, premium materials, transparent budgeting, and five generations of expertise.",
  openGraph: {
    title: "Custom Home Building | Bar Moon Contracting",
    description:
      "Your dream, built from the ground up. Full design-build custom homes in Central Texas with five generations of craftsmanship.",
  },
  alternates: {
    canonical: "/services/custom-homes",
  },
};

export default function CustomHomesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
