/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.hygrix.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*'],
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://www.hygrix.com/sitemap.xml',
      'https://www.hygrix.com/server-sitemap.xml',
    ],
  },

  // Transform function to add images to sitemap
  transform: async (config, path) => {
    // Define images for specific pages
    const pageImages = {
      '/': [
        {
          loc: 'https://www.hygrix.com/og-image.jpg',
          title: 'Hygrix Infection Control Solutions',
          caption: 'Advanced infection control and spill management solutions',
        },
      ],
      '/aboutus': [
        {
          loc: 'https://www.hygrix.com/og-about.jpg',
          title: 'About Hygrix',
          caption: 'Leading provider of infection control solutions',
        },
      ],
      '/products': [
        {
          loc: 'https://www.hygrix.com/og-products.jpg',
          title: 'Hygrix Products',
          caption: 'Comprehensive range of infection control products',
        },
      ],
      '/blogs': [
        {
          loc: 'https://www.hygrix.com/og-blog.jpg',
          title: 'Hygrix Blog',
          caption: 'Expert insights on infection prevention',
        },
      ],
      '/contactus': [
        {
          loc: 'https://www.hygrix.com/og-contact.jpg',
          title: 'Contact Hygrix',
          caption: 'Get in touch with our team',
        },
      ],
    };

    // Set priority and change frequency based on page type
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/products/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/blogs/')) {
      priority = 0.6;
      changefreq = 'monthly';
    } else if (['/aboutus', '/contactus'].includes(path)) {
      priority = 0.5;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
      images: pageImages[path] || [],
    };
  },

  additionalPaths: async (config) => {
    // You can add dynamic paths here if needed
    const result = [];

    // Example: Add product pages dynamically
    // const products = await getProducts();
    // products.forEach(product => {
    //   result.push({
    //     loc: `/products/${product.id}`,
    //     changefreq: 'weekly',
    //     priority: 0.8,
    //     lastmod: new Date().toISOString(),
    //     images: [
    //       {
    //         loc: product.image,
    //         title: product.name,
    //         caption: product.description,
    //       },
    //     ],
    //   });
    // });

    return result;
  },
};
