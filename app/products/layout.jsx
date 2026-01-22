export const metadata = {
  title: "Hygrix Products - Infection Control & Spill Kits",
  description: "Browse our range of infection control products including biohazard spill kits, disinfectants, absorbent granules, and safety equipment for healthcare facilities.",
  keywords: "spill kits, biohazard kits, infection control products, disinfectants, bleach wipes, absorbent granules, cytotoxic spill kit",
  openGraph: {
    title: "Hygrix Products - Advanced Spill Management & Disinfection",
    description: "Explore Hygrix's comprehensive range of infection prevention products: spill kits, CL TAB tablets, bleach sprays, neutralising solutions, and PPE for healthcare settings.",
    url: "https://www.hygrix.com/products",
    siteName: "Hygrix",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Hygrix Infection Control Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hygrix Products - Spill Kits & Disinfectants",
    description: "Shop professional-grade infection control products: biohazard spill kits, chlorine tablets, bleach solutions, and absorbent granules for safe spill management.",
    images: ["/twitter-products.jpg"],
    creator: "@hygrix",
    site: "@hygrix",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.hygrix.com/products",
  },
};

export default function ProductsLayout({ children }) {
  return children;
}
