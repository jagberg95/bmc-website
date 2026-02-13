
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Import Header client component
import Footer from "./components/Footer"; // Import Footer component (new)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barmooncontracting.com"),
  title: {
    default: "Bar Moon Contracting | Central Texas Custom Homes & Renovations",
    template: "%s | Bar Moon Contracting",
  },
  description:
    "Bar Moon Contracting — Central Texas general contracting, custom home building, renovations, outdoor living, and home repairs. Five generations of craftsmanship, rooted in integrity.",
  keywords: [
    "Central Texas contractor",
    "custom home builder",
    "home renovations",
    "outdoor living",
    "home repairs",
    "Bar Moon Contracting",
    "Texas craftsmanship",
    "general contractor",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bar Moon Contracting",
    title: "Bar Moon Contracting | Central Texas Custom Homes & Renovations",
    description:
      "Five generations of Central Texas craftsmanship. Custom homes, renovations, outdoor living, and home repairs — built with integrity.",
    images: [
      {
        url: "/images/Logo Master/Circle/BMC_Logo_Circle_Clean_01.png",
        width: 800,
        height: 800,
        alt: "Bar Moon Contracting Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bar Moon Contracting | Central Texas Custom Homes & Renovations",
    description:
      "Five generations of Central Texas craftsmanship. Custom homes, renovations, outdoor living, and home repairs.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://barmooncontracting.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Bar Moon Contracting LLC",
    description:
      "Central Texas general contracting, custom home building, renovations, outdoor living, and home repairs. Five generations of craftsmanship.",
    url: "https://barmooncontracting.com",
    telephone: "+1-254-581-3808",
    email: "barmooncontracting@protonmail.com",
    areaServed: {
      "@type": "State",
      name: "Texas",
      containedInPlace: {
        "@type": "Country",
        name: "US",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.55,
      longitude: -97.15,
    },
    serviceType: [
      "Custom Home Building",
      "Home Renovations",
      "Outdoor Living",
      "Home Repairs",
      "Landscape Design",
    ],
    priceRange: "$$",
    image:
      "https://barmooncontracting.com/images/Logo Master/Circle/BMC_Logo_Circle_Clean_01.png",
    logo: "https://barmooncontracting.com/images/Logo Master/Circle/BMC_Logo_Circle_Clean_01.png",
    sameAs: [],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary text-white min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer /> {/* Global footer across all pages */}
      </body>
    </html>
  );
}
