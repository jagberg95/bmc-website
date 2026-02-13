import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Repairs",
  description:
    "Honest, high-quality home repairs in Central Texas. Electrical, plumbing, drywall, storm damage, doors, windows, and more — done right the first time by Bar Moon Contracting.",
  openGraph: {
    title: "Home Repairs | Bar Moon Contracting",
    description:
      "Done right, the first time. Electrical, plumbing, drywall, storm damage, and more — fixed at the source, not patched over.",
  },
  alternates: {
    canonical: "/services/home-repairs",
  },
};

export default function HomeRepairsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
