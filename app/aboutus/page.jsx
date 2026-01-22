import HealthServices from "../components/about/HealthServices"
import Who from "../components/about/Who"
import HealthPriority from "../components/about/HealthPriority"
import WhyChooseUs from "../components/about/WhyChooseUs"
import Success from "../components/about/Success"
import Banner from "../components/common/Banner"

export const metadata = {
  title: "About Hygrix - Infection Prevention & Control Experts",
  description: "Learn about Hygrix's mission to provide advanced infection control solutions. We partner with healthcare professionals globally for effective prevention strategies.",
  keywords: "about Hygrix, infection prevention, healthcare partners, spill management experts, laboratory safety",
  openGraph: {
    title: "About Hygrix - Leading Infection Control & Safety Solutions",
    description: "Discover how Hygrix supports healthcare professionals, laboratories, and organizations worldwide with innovative infection prevention and spill management solutions.",
    url: "https://www.hygrix.com/aboutus",
    siteName: "Hygrix",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Hygrix - Infection Control Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Hygrix - Infection Prevention Experts",
    description: "Learn about our commitment to safer environments through advanced infection control and spill management solutions for healthcare and laboratory settings.",
    images: ["/twitter-about.jpg"],
    creator: "@hygrix",
    site: "@hygrix",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.hygrix.com/aboutus",
  },
};

export default function About() {
    return(
        <>
            <HealthServices />
            <Who />
            <HealthPriority />
            <WhyChooseUs />
            <Success />
            <Banner />
        </>
    )
}