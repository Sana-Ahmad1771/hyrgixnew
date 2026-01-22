import data from './components/data/data.json';

export default async function sitemap() {
  const baseUrl = 'https://www.hygrix.com';
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          title: 'Hygrix Infection Control Solutions',
          caption: 'Advanced infection control and spill management solutions',
        },
      ],
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
      images: [
        {
          url: `${baseUrl}/og-about.jpg`,
          title: 'About Hygrix',
        },
      ],
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        {
          url: `${baseUrl}/og-products.jpg`,
          title: 'Hygrix Products',
        },
      ],
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
      images: [
        {
          url: `${baseUrl}/og-blog.jpg`,
          title: 'Hygrix Blog',
        },
      ],
    },
    {
      url: `${baseUrl}/contactus`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
      images: [
        {
          url: `${baseUrl}/og-contact.jpg`,
          title: 'Contact Hygrix',
        },
      ],
    },
  ];

  // Dynamic product pages
  const productPages = data.products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
    images: product.image
      ? [
          {
            url: product.image.startsWith('http') ? product.image : `${baseUrl}${product.image}`,
            title: product.name,
            caption: product.description || `Professional ${product.name} for infection control`,
          },
        ]
      : [
          {
            url: `${baseUrl}/og-product-default.jpg`,
            title: product.name,
          },
        ],
  }));

  // Dynamic blog pages
  const blogPages = data.blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: blog.updatedDate || blog.date || currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
    images: blog.image
      ? [
          {
            url: blog.image.startsWith('http') ? blog.image : `${baseUrl}${blog.image}`,
            title: blog.title,
            caption: blog.excerpt || blog.description || blog.title,
          },
        ]
      : [
          {
            url: `${baseUrl}/og-blog-default.jpg`,
            title: blog.title,
          },
        ],
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
