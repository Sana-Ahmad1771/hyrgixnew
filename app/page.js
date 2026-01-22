import Hero from "./components/home/Hero";
import Brands from "./components/common/Brands";
import HealthTracking from "./components/home/HealthTracking";
import RedefineHealthCare from "./components/home/RedefineHealthCare";
import Journey from "./components/home/Journey";
import Products from "./components/home/Products";
import Reviews from "./components/home/Reviews";
import Banner from "./components/common/Banner";
import Who from "./components/about/Who";

export const metadata = {
  title: "Hygrix - Advanced Infection Control & Spill Solutions",
  description: "Leading provider of infection control and biohazard spill management solutions for healthcare, laboratories, and organizations worldwide. Shop spill kits and disinfectants.",
  keywords: "infection control, spill management, biohazard spill kit, healthcare solutions, disinfectant, Hygrix",
  openGraph: {
    title: "Hygrix - Advanced Infection Control & Spill Management Solutions",
    description: "Partner with healthcare professionals worldwide for effective infection prevention and control. Explore our range of spill kits, disinfectants, and safety products.",
    url: "https://www.hygrix.com",
    siteName: "Hygrix",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hygrix Infection Control Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hygrix - Advanced Infection Control & Spill Solutions",
    description: "Leading infection control and spill management solutions for healthcare professionals. Discover our innovative biohazard spill kits and disinfectants.",
    images: ["/twitter-image.jpg"],
    creator: "@hygrix",
    site: "@hygrix",
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
  alternates: {
    canonical: "https://www.hygrix.com",
  },
};

export default function Home(){
  // FAQ Schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What infection control products does Hygrix offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hygrix offers a comprehensive range of infection control products including biohazard spill kits, absorbency granules, CL TAB disinfectant tablets, bleach sprays and wipes, cytotoxic spill kits, and neutralising sprays for healthcare and laboratory environments."
        }
      },
      {
        "@type": "Question",
        "name": "How do Hygrix spill kits work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hygrix spill kits contain absorbent powder that quickly solidifies liquid spills, including blood, urine, and vomit. The kits include complete PPE, disinfectant tablets for surface decontamination, collection tools, and disposal bags for safe spill management."
        }
      },
      {
        "@type": "Question",
        "name": "Are Hygrix products certified for healthcare use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Hygrix products are tested and certified against BS EN standards and comply with CDC and WHO guidelines for infection control. Our disinfectants are virucidal, bactericidal, fungicidal, tuberculocidal, and sporicidal."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between NaDCC tablets and household bleach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hygrix CL TAB tablets contain Sodium dichloroisocyanurate (NaDCC), which is approximately 100x more effective than household bleach. They're biodegradable, non-toxic, and dissolve to create the precise concentration needed for effective disinfection."
        }
      },
      {
        "@type": "Question",
        "name": "Where can Hygrix products be used?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hygrix products are suitable for hospitals, clinics, laboratories, nursing homes, emergency services, schools, universities, pharmacies, and any facility requiring professional infection control and spill management solutions."
        }
      }
    ]
  };

  return(
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Hero />
      <Brands />
      <HealthTracking />
      <RedefineHealthCare />
      <Journey />
      <Products />
      <Reviews />
      <Banner />
    </>
  )
}