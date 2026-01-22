export const metadata = {
  title: "Hygrix Blog - Infection Control & Healthcare Insights",
  description: "Read expert articles on infection prevention, spill management best practices, healthcare safety protocols, and the latest updates in laboratory safety standards.",
  keywords: "infection control blog, healthcare safety, spill management tips, laboratory safety, IPC best practices, healthcare insights",
  openGraph: {
    title: "Hygrix Blog - Expert Insights on Infection Prevention",
    description: "Stay informed with Hygrix's expert articles on infection control, biohazard management, healthcare compliance, and safety innovations for medical facilities.",
    url: "https://www.hygrix.com/blogs",
    siteName: "Hygrix",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Hygrix Blog - Healthcare & Safety Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hygrix Blog - Healthcare Safety & IPC Insights",
    description: "Expert guidance on infection prevention, spill management protocols, and healthcare safety. Learn from industry professionals about best practices.",
    images: ["/twitter-blog.jpg"],
    creator: "@hygrix",
    site: "@hygrix",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.hygrix.com/blogs",
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
