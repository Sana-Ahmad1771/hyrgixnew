import ContactForm from "../components/contact/ContactForm";
import Address from "../components/contact/Address";

export const metadata = {
  title: "Contact Hygrix - Get Infection Control Solutions Today",
  description:
    "Contact Hygrix for expert advice on infection control and spill management. Reach our team for product guidance, technical support, and custom solutions.",
  keywords:
    "contact Hygrix, infection control support, spill kit inquiry, healthcare solutions contact, technical support",
  openGraph: {
    title: "Contact Hygrix - Expert Infection Control Support",
    description:
      "Get in touch with Hygrix for infection prevention solutions. Our experts are ready to help with product selection, technical guidance, and custom requirements.",
    url: "https://www.hygrix.com/contactus",
    siteName: "Hygrix",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Hygrix for Infection Control Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Hygrix - Infection Control Experts",
    description:
      "Reach out to Hygrix for professional advice on spill management and infection control. Our team provides comprehensive product support and guidance.",
    images: ["/twitter-contact.jpg"],
    creator: "@hygrix",
    site: "@hygrix",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.hygrix.com/contactus",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <Address />
    </>
  );
}
