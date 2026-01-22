import data from "../../components/data/data.json";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = data.blogs.find(b => b.slug === slug);

  if (!blog) {
    return {
      title: "Article Not Found - Hygrix Blog",
      description: "The requested blog article could not be found.",
    };
  }

  const title = blog.title.length > 60 
    ? `${blog.title.substring(0, 57)}...` 
    : blog.title;
  
  const description = blog.excerpt
    ? blog.excerpt.substring(0, 160)
    : blog.description?.substring(0, 160) || `Read about ${blog.title} on Hygrix blog. Expert insights on infection control and healthcare safety.`;

  return {
    title: `${title} - Hygrix Blog`,
    description,
    keywords: `${blog.category}, infection control, healthcare, ${blog.title}, Hygrix blog`,
    authors: [{ name: blog.author || "Hygrix Team" }],
    openGraph: {
      title: blog.title,
      description,
      url: `https://www.hygrix.com/blogs/${slug}`,
      siteName: "Hygrix",
      type: "article",
      locale: "en_US",
      publishedTime: blog.date,
      authors: [blog.author || "Hygrix Team"],
      section: blog.category,
      images: [
        {
          url: blog.image || "/og-blog-default.jpg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [blog.image || "/twitter-blog-default.jpg"],
      creator: "@hygrix",
      site: "@hygrix",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.hygrix.com/blogs/${slug}`,
    },
  };
}

export default function BlogLayout({ children }) {
  return children;
}
