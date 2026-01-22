import { Geist, Geist_Mono, Poppins, Spline_Sans } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Aeonik is a custom font - using a similar Google Font as fallback
// If you have Aeonik font files, place them in /public/fonts/ and uncomment below:
// const aeonik = localFont({
//   src: [
//     { path: '../public/fonts/Aeonik-Regular.woff2', weight: '400', style: 'normal' },
//     { path: '../public/fonts/Aeonik-Medium.woff2', weight: '500', style: 'normal' },
//     { path: '../public/fonts/Aeonik-Bold.woff2', weight: '700', style: 'normal' },
//   ],
//   variable: '--font-aeonik',
// });

export const metadata = {
  metadataBase: new URL("https://www.hygrix.com"),
  title: {
    default: "Hygrix - Advanced Infection Control & Spill Solutions",
    template: "%s | Hygrix",
  },
  description: "Leading provider of infection control and biohazard spill management solutions for healthcare, laboratories, and organizations worldwide.",
  keywords: ["infection control", "spill management", "biohazard spill kit", "healthcare solutions", "disinfectant", "bleach wipes", "CL TAB tablets", "cytotoxic spill kit", "absorbent granules", "Hygrix"],
  authors: [{ name: "Hygrix" }],
  creator: "Hygrix",
  publisher: "Hygrix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hygrix.com",
    siteName: "Hygrix",
    title: "Hygrix - Advanced Infection Control & Spill Management Solutions",
    description: "Partner with healthcare professionals worldwide for effective infection prevention and control. Explore our range of spill kits, disinfectants, and safety products.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hygrix",
    creator: "@hygrix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hygrix",
    "url": "https://www.hygrix.com",
    "logo": "https://www.hygrix.com/logo.png",
    "description": "Leading provider of infection control and biohazard spill management solutions for healthcare, laboratories, and organizations worldwide.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@hygrix.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.facebook.com/hygrix",
      "https://www.twitter.com/hygrix",
      "https://www.linkedin.com/company/hygrix",
      "https://www.instagram.com/hygrix"
    ],
    "founder": {
      "@type": "Organization",
      "name": "Hygrix"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hygrix",
    "url": "https://www.hygrix.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.hygrix.com/products?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${splineSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
