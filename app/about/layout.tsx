import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bar Moon Contracting — a Central Texas legacy five generations strong. 12+ years residential, 5+ years commercial experience. Rooted here, built to last.",
  openGraph: {
    title: "About Bar Moon Contracting",
    description:
      "A Central Texas legacy five generations strong. Learn about our family story, experience, and commitment to craftsmanship.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
