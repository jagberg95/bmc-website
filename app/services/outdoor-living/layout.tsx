import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outdoor Living",
  description:
    "Decks, patios, landscape design, and hardscapes built for Texas living. Bar Moon Contracting creates outdoor spaces accounting for clay soils, heat, and drainage.",
  openGraph: {
    title: "Outdoor Living | Bar Moon Contracting",
    description:
      "Your backyard, built right. Decks, patios, and landscape design made for Central Texas living.",
  },
  alternates: {
    canonical: "/services/outdoor-living",
  },
};

export default function OutdoorLivingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
