import data from "../../components/data/data.json";

export async function generateMetadata({ params }) {
  const { id } = params;
  const product = data.products.find(p => p.id === parseInt(id));

  if (!product) {
    return {
      title: "Product Not Found - Hygrix",
      description: "The requested product could not be found.",
    };
  }

  const title = `${product.name} - Hygrix Infection Control Products`;
  const description = product.description
    ? `${product.description.substring(0, 155)}...`
    : `Buy ${product.name} from Hygrix. Professional infection control and spill management solution for healthcare, laboratories, and medical facilities.`;

  return {
    title: title.length > 60 ? `${product.name} - Hygrix` : title,
    description,
    keywords: `${product.name}, ${product.category}, infection control, spill management, healthcare products, Hygrix`,
    openGraph: {
      title: `${product.name} - Professional Infection Control Solution`,
      description: `${product.name}: ${description}`,
      url: `https://www.hygrix.com/products/${id}`,
      siteName: "Hygrix",
      type: "product",
      locale: "en_US",
      images: [
        {
          url: product.image || "/og-product-default.jpg",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name.length > 60 ? `${product.name.substring(0, 57)}...` : product.name,
      description,
      images: [product.image || "/twitter-product-default.jpg"],
      creator: "@hygrix",
      site: "@hygrix",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.hygrix.com/products/${id}`,
    },
  };
}

export default function ProductLayout({ children }) {
  return children;
}
