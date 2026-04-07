import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Bar Moon Contracting",
  description:
    "Latest news, insights, and project highlights from Bar Moon Contracting, your trusted general contractor in Temple, Texas.",
  robots: "noindex, nofollow",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
