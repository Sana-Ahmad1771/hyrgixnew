// Example Structured Data (JSON-LD) Components
// Add these to your pages for enhanced SEO and rich snippets

// ============================================
// 1. ORGANIZATION SCHEMA (Add to app/layout.js)
// ============================================

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hygrix",
    "url": "https://www.hygrix.com",
    "logo": "https://www.hygrix.com/logo.png",
    "description": "Leading provider of infection control and biohazard spill management solutions for healthcare, laboratories, and organizations worldwide.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your Region",
      "postalCode": "Your Postal Code",
      "addressCountry": "Your Country"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
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
    "foundingDate": "YYYY",
    "industry": "Healthcare & Medical Equipment"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// 2. PRODUCT SCHEMA (Add to product detail pages)
// ============================================

export function ProductSchema({ product }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image || "https://www.hygrix.com/product-default.jpg",
    "brand": {
      "@type": "Brand",
      "name": "Hygrix"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hygrix"
    },
    "sku": product.partNumber || product.id,
    "mpn": product.partNumber,
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "url": `https://www.hygrix.com/products/${product.id}`,
      "priceCurrency": "USD",
      "price": product.price || "0.00",
      "availability": product.inStock 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Hygrix"
      }
    },
    "aggregateRating": product.rating ? {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount || 0
    } : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Usage in app/products/[id]/page.jsx:
// Add to the component:
// import { ProductSchema } from '@/app/components/schemas/StructuredData'
// 
// In the return statement, add:
// <ProductSchema product={product} />

// ============================================
// 3. ARTICLE SCHEMA (Add to blog posts)
// ============================================

export function ArticleSchema({ blog }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt || blog.description,
    "image": blog.image || "https://www.hygrix.com/blog-default.jpg",
    "author": {
      "@type": "Person",
      "name": blog.author || "Hygrix Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hygrix",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hygrix.com/logo.png"
      }
    },
    "datePublished": blog.date,
    "dateModified": blog.updatedDate || blog.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.hygrix.com/blogs/${blog.slug}`
    },
    "articleSection": blog.category,
    "keywords": blog.tags ? blog.tags.join(", ") : blog.category,
    "wordCount": blog.content?.split(" ").length || 0
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Usage in app/blogs/[slug]/page.jsx:
// Add to the component:
// import { ArticleSchema } from '@/app/components/schemas/StructuredData'
// 
// In the return statement, add:
// <ArticleSchema blog={blog} />

// ============================================
// 4. BREADCRUMB SCHEMA
// ============================================

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `https://www.hygrix.com${item.url}` : undefined
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Usage example for product page:
// const breadcrumbItems = [
//   { name: "Home", url: "/" },
//   { name: "Products", url: "/products" },
//   { name: product.category, url: `/products?category=${product.category}` },
//   { name: product.name, url: `/products/${product.id}` }
// ];
// <BreadcrumbSchema items={breadcrumbItems} />

// ============================================
// 5. FAQ SCHEMA (If you have FAQ sections)
// ============================================

export function FAQSchema({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// 6. LOCAL BUSINESS SCHEMA (If applicable)
// ============================================

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Hygrix",
    "image": "https://www.hygrix.com/storefront.jpg",
    "description": "Leading provider of infection control and spill management solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "Your ZIP",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "XX.XXXXX",
      "longitude": "-XX.XXXXX"
    },
    "url": "https://www.hygrix.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// 7. WEBSITE SEARCH BOX SCHEMA
// ============================================

export function WebsiteSearchSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hygrix",
    "url": "https://www.hygrix.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.hygrix.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// 8. REVIEW/RATING SCHEMA (For products with reviews)
// ============================================

export function ReviewSchema({ product, reviews }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.averageRating,
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.authorName
      },
      "datePublished": review.date,
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================
// IMPLEMENTATION GUIDE
// ============================================

/*
STEP 1: Create the Schema Component File
Create: app/components/schemas/StructuredData.jsx
Copy all the above functions into this file

STEP 2: Add Organization Schema to Root Layout
In app/layout.js, add:

import { OrganizationSchema } from './components/schemas/StructuredData'

In the return statement of RootLayout, add:
<OrganizationSchema />

STEP 3: Add Product Schema to Product Pages
In app/products/[id]/page.jsx, add:

import { ProductSchema, BreadcrumbSchema } from '@/app/components/schemas/StructuredData'

In the return statement:
<>
  <ProductSchema product={product} />
  <BreadcrumbSchema items={breadcrumbItems} />
  {rest of your JSX}
</>

STEP 4: Add Article Schema to Blog Posts
In app/blogs/[slug]/page.jsx, add:

import { ArticleSchema, BreadcrumbSchema } from '@/app/components/schemas/StructuredData'

In the return statement:
<>
  <ArticleSchema blog={blog} />
  <BreadcrumbSchema items={breadcrumbItems} />
  {rest of your JSX}
</>

STEP 5: Test Your Structured Data
1. Deploy your changes
2. Visit: https://search.google.com/test/rich-results
3. Enter your page URLs
4. Verify all schemas are valid

BENEFITS:
✅ Rich snippets in search results
✅ Better click-through rates
✅ Enhanced product listings
✅ Article previews with author/date
✅ Star ratings in search
✅ Breadcrumb trails in SERPs
✅ FAQ accordions in search
✅ Local business information
*/

// ============================================
// PRODUCT-SPECIFIC SCHEMA EXAMPLES
// ============================================

// Example for Hygrix Biohazard Spill Kit Max
export const BiohazardKitSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Hygrix Biohazard Spill Kit Max",
  "description": "All-in-one biohazard spill kit with absorbent powder, disinfectant tablets, PPE, and disposal bags.",
  "brand": { "@type": "Brand", "name": "Hygrix" },
  "sku": "HBSK1001",
  "mpn": "HBSK1001",
  "category": "Infection Control > Spill Kits",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Certification",
      "value": "CE Marked, BS EN Tested"
    },
    {
      "@type": "PropertyValue",
      "name": "Application",
      "value": "Healthcare, Laboratories, Medical Facilities"
    },
    {
      "@type": "PropertyValue",
      "name": "Contents",
      "value": "PPE, Absorbent Powder, Disinfectant Tablets, Disposal Bags"
    }
  ]
};

// Example for Hygrix CL TAB Tablets
export const CLTabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Hygrix CL TAB Tablets",
  "description": "NaDCC chlorine disinfectant tablets for infection control and surface disinfection.",
  "brand": { "@type": "Brand", "name": "Hygrix" },
  "sku": "BNG1233",
  "category": "Disinfectants > Chlorine Tablets",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Active Ingredient",
      "value": "Sodium Dichloroisocyanurate (NaDCC)"
    },
    {
      "@type": "PropertyValue",
      "name": "Certification",
      "value": "BS EN 1276, BS EN 14476, BS EN 13704"
    },
    {
      "@type": "PropertyValue",
      "name": "Standards",
      "value": "CDC Guidelines, WHO Guidelines"
    }
  ]
};
