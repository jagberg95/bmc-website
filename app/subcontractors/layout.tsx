import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subcontractor Partnerships | Join Bar Moon Contracting in Central Texas",
  description:
    "Bar Moon Contracting is seeking skilled subcontractors in Central Texas. Join our team — electricians, plumbers, framers, HVAC, concrete, drywall, roofers, painters, and more. Reliable work, fair pay, mutual respect.",
  keywords: [
    "subcontractor jobs Central Texas",
    "subcontractor partnership Texas",
    "hiring subcontractors Texas",
    "electrician subcontractor Texas",
    "plumber subcontractor Texas",
    "framing subcontractor Texas",
    "HVAC subcontractor Central Texas",
    "construction subcontractor opportunities",
    "general contractor seeking subs",
    "Bar Moon Contracting subcontractor",
    "Central Texas construction jobs",
    "subcontractor work Waco Texas",
    "subcontractor work Temple Texas",
    "subcontractor work Killeen Texas",
    "home renovation subcontractor Texas",
    "home repair subcontractor jobs",
  ],
  openGraph: {
    title: "Partner With Us — Subcontractor Opportunities | Bar Moon Contracting",
    description:
      "We're building a network of skilled, reliable subcontractors in Central Texas. Fair pay, steady work, and mutual respect. Apply today.",
    type: "website",
  },
  alternates: {
    canonical: "/subcontractors",
  },
};

export default function SubcontractorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
