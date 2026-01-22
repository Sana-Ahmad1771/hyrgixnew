# Hygrix SEO Metadata Documentation

## Overview
This document outlines the comprehensive SEO metadata implementation for the Hygrix website, including meta titles, descriptions, Open Graph tags, Twitter Cards, and optimization recommendations.

---

## Page-by-Page Metadata

### 1. Home Page (`/`)
**File:** `app/page.js`

- **Meta Title:** "Hygrix - Advanced Infection Control & Spill Solutions" (58 chars)
- **Meta Description:** "Leading provider of infection control and biohazard spill management solutions for healthcare, laboratories, and organizations worldwide. Shop spill kits and disinfectants." (172 chars)
- **Keywords:** infection control, spill management, biohazard spill kit, healthcare solutions, disinfectant, Hygrix
- **Canonical URL:** https://www.hygrix.com

**Open Graph:**
- Title: "Hygrix - Advanced Infection Control & Spill Management Solutions"
- Description: Expanded version highlighting partnership with healthcare professionals
- Type: website
- Images: /og-image.jpg (1200x630)

**Twitter Card:**
- Card Type: summary_large_image
- Optimized title and description for Twitter platform

---

### 2. About Us Page (`/aboutus`)
**File:** `app/aboutus/page.jsx`

- **Meta Title:** "About Hygrix - Infection Prevention & Control Experts" (57 chars)
- **Meta Description:** "Learn about Hygrix's mission to provide advanced infection control solutions. We partner with healthcare professionals globally for effective prevention strategies." (163 chars)
- **Keywords:** about Hygrix, infection prevention, healthcare partners, spill management experts, laboratory safety
- **Canonical URL:** https://www.hygrix.com/aboutus

**Open Graph:**
- Title: "About Hygrix - Leading Infection Control & Safety Solutions"
- Focus on global partnerships and innovation
- Type: website
- Images: /og-about.jpg (1200x630)

---

### 3. Products Listing Page (`/products`)
**File:** `app/products/layout.jsx`

- **Meta Title:** "Hygrix Products - Infection Control & Spill Kits" (52 chars)
- **Meta Description:** "Browse our range of infection control products including biohazard spill kits, disinfectants, absorbent granules, and safety equipment for healthcare facilities." (162 chars)
- **Keywords:** spill kits, biohazard kits, infection control products, disinfectants, bleach wipes, absorbent granules, cytotoxic spill kit
- **Canonical URL:** https://www.hygrix.com/products

**Open Graph:**
- Title: "Hygrix Products - Advanced Spill Management & Disinfection"
- Comprehensive product range highlighting
- Type: website
- Images: /og-products.jpg (1200x630)

---

### 4. Individual Product Pages (`/products/[id]`)
**File:** `app/products/[id]/layout.jsx`

**Dynamic Metadata Generation:**
- **Meta Title:** "{Product Name} - Hygrix Infection Control Products" (max 60 chars)
- **Meta Description:** Product-specific description (150-160 chars) or generated from product data
- **Keywords:** Dynamic based on product name, category, and type
- **Canonical URL:** https://www.hygrix.com/products/{id}

**Open Graph:**
- Type: product
- Dynamic title: "{Product Name} - Professional Infection Control Solution"
- Product-specific image from database
- Fallback image: /og-product-default.jpg

**Example Products from PDF:**
1. Hygrix Absorbency Granules (HAG2000, HAG1075)
2. Hygrix Biohazard Spill Kit Max (HBSK1001)
3. Hygrix Bleach Spray (HBS1001)
4. Hygrix Bleach Wipes (HBW1200)
5. Hygrix Chemical Spill Kit (HCSK1001)
6. Hygrix CL Granules (HCG1001)
7. Hygrix CL TAB Tablets (BNG1233, BNG1250, BNG1150)
8. Hygrix Cytotoxic Spill Kit (HCSK2001)
9. Hygrix Neutralising Spray (HNS1250)
10. Hygrix Urine & Vomit Spill Kit (HUSK1001)
11. Hygrix Urine & Vomit Spill Pack (HUP1001)

---

### 5. Blog Listing Page (`/blogs`)
**File:** `app/blogs/layout.jsx`

- **Meta Title:** "Hygrix Blog - Infection Control & Healthcare Insights" (59 chars)
- **Meta Description:** "Read expert articles on infection prevention, spill management best practices, healthcare safety protocols, and the latest updates in laboratory safety standards." (162 chars)
- **Keywords:** infection control blog, healthcare safety, spill management tips, laboratory safety, IPC best practices, healthcare insights
- **Canonical URL:** https://www.hygrix.com/blogs

**Open Graph:**
- Title: "Hygrix Blog - Expert Insights on Infection Prevention"
- Focus on expertise and educational content
- Type: website
- Images: /og-blog.jpg (1200x630)

---

### 6. Individual Blog Posts (`/blogs/[slug]`)
**File:** `app/blogs/[slug]/layout.jsx`

**Dynamic Metadata Generation:**
- **Meta Title:** "{Blog Title}" (max 60 chars) + " - Hygrix Blog"
- **Meta Description:** Blog excerpt or description (150-160 chars)
- **Keywords:** Dynamic based on blog category and title
- **Authors:** Dynamic from blog data
- **Canonical URL:** https://www.hygrix.com/blogs/{slug}

**Open Graph:**
- Type: article
- Published time included
- Article section (category)
- Author attribution
- Blog-specific image or fallback: /og-blog-default.jpg

---

### 7. Contact Page (`/contactus`)
**File:** `app/contactus/page.jsx`

- **Meta Title:** "Contact Hygrix - Get Infection Control Solutions Today" (60 chars)
- **Meta Description:** "Contact Hygrix for expert advice on infection control and spill management. Reach our team for product guidance, technical support, and custom solutions." (154 chars)
- **Keywords:** contact Hygrix, infection control support, spill kit inquiry, healthcare solutions contact, technical support
- **Canonical URL:** https://www.hygrix.com/contactus

**Open Graph:**
- Title: "Contact Hygrix - Expert Infection Control Support"
- Focus on accessibility and expert support
- Type: website
- Images: /og-contact.jpg (1200x630)

---

## Root Layout Configuration (`app/layout.js`)

### Global Metadata Settings:
- **metadataBase:** https://www.hygrix.com
- **Title Template:** "%s | Hygrix" (for all child pages)
- **Default Title:** "Hygrix - Advanced Infection Control & Spill Solutions"

### Global Settings:
- Format Detection: Disabled for email, address, telephone (prevents unwanted auto-linking)
- Robots: Full indexing and following enabled
- Google Bot: Maximum preview settings for rich snippets
- Verification codes: Placeholders for Google, Bing, Yandex (to be added)

---

## Required Images for SEO

Create the following optimized images:

### Open Graph Images (1200x630px):
1. `/public/og-image.jpg` - Homepage
2. `/public/og-about.jpg` - About page
3. `/public/og-products.jpg` - Products listing
4. `/public/og-product-default.jpg` - Fallback for products
5. `/public/og-blog.jpg` - Blog listing
6. `/public/og-blog-default.jpg` - Fallback for blog posts
7. `/public/og-contact.jpg` - Contact page

### Twitter Card Images (1200x630px):
1. `/public/twitter-image.jpg` - Homepage
2. `/public/twitter-about.jpg` - About page
3. `/public/twitter-products.jpg` - Products listing
4. `/public/twitter-product-default.jpg` - Fallback for products
5. `/public/twitter-blog.jpg` - Blog listing
6. `/public/twitter-blog-default.jpg` - Fallback for blog posts
7. `/public/twitter-contact.jpg` - Contact page

**Image Optimization Tips:**
- Use WebP format for better compression
- Include Hygrix branding and logo
- High contrast text for social media visibility
- Mobile-friendly design (readable on small screens)
- File size under 300KB for fast loading

---

## Additional SEO Recommendations

### 1. Structured Data (Schema.org)
Add JSON-LD structured data for:
- **Organization Schema** (in layout.js)
- **Product Schema** (in product pages)
- **Article Schema** (in blog posts)
- **BreadcrumbList** (for navigation)
- **FAQPage** (if you have FAQ sections)

### 2. robots.txt
Create `/public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://www.hygrix.com/sitemap.xml

# Disallow admin or private pages if any
# Disallow: /admin/
```

### 3. Sitemap Generation
Install next-sitemap package:
```bash
npm install next-sitemap
```

Create `next-sitemap.config.js` in root:
```javascript
module.exports = {
  siteUrl: 'https://www.hygrix.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ],
  },
}
```

Add to package.json scripts:
```json
"postbuild": "next-sitemap"
```

### 4. Performance Optimization
- Enable Next.js Image Optimization for all images
- Use lazy loading for below-fold content
- Implement proper caching headers
- Minimize JavaScript bundle size
- Use font-display: swap for custom fonts

### 5. Analytics & Monitoring
Add to `app/layout.js`:
- Google Analytics 4 (GA4)
- Google Tag Manager (GTM)
- Google Search Console verification
- Bing Webmaster Tools verification

### 6. Core Web Vitals
Focus on:
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### 7. Accessibility (a11y)
- Add proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Maintain color contrast ratios (WCAG AA)

### 8. Content Optimization
- Add internal linking between related products and blog posts
- Create pillar content for main product categories
- Use descriptive alt text for all images
- Implement breadcrumb navigation
- Add FAQ sections for common queries

### 9. Social Media Integration
Update with actual social media handles:
- Twitter/X: @hygrix
- LinkedIn: company/hygrix
- Facebook: hygrix
- Instagram: @hygrix

### 10. Local SEO (if applicable)
If Hygrix has physical locations:
- Add Google Business Profile
- Include NAP (Name, Address, Phone) consistently
- Add LocalBusiness schema markup
- Create location-specific pages

---

## Testing Checklist

### SEO Tools:
- [ ] Google Search Console - Submit sitemap
- [ ] Google Rich Results Test - Validate structured data
- [ ] Facebook Sharing Debugger - Test OG tags
- [ ] Twitter Card Validator - Test Twitter cards
- [ ] PageSpeed Insights - Check performance
- [ ] Lighthouse - Overall SEO audit
- [ ] Screaming Frog - Crawl website for issues

### Meta Tag Validators:
- [ ] Verify all titles are 50-60 characters
- [ ] Verify all descriptions are 150-160 characters
- [ ] Check for duplicate meta descriptions
- [ ] Ensure all pages have unique titles
- [ ] Verify canonical URLs are correct

### Mobile Optimization:
- [ ] Test responsive design on all devices
- [ ] Verify mobile-friendly in Google Search Console
- [ ] Check tap targets are appropriately sized
- [ ] Ensure text is readable without zooming

---

## Maintenance Schedule

### Weekly:
- Monitor Google Search Console for errors
- Check for broken links
- Review top-performing pages

### Monthly:
- Update blog content with fresh articles
- Review and update product descriptions
- Check competitor SEO strategies
- Analyze keyword rankings

### Quarterly:
- Full SEO audit
- Update metadata based on performance
- Review and update structured data
- Content gap analysis

---

## Key Performance Indicators (KPIs)

Track these metrics:
1. Organic traffic growth
2. Keyword rankings (target: top 10 for primary keywords)
3. Click-through rate (CTR) from search results
4. Bounce rate (target: < 60%)
5. Average session duration
6. Pages per session
7. Conversion rate from organic traffic
8. Core Web Vitals scores

---

## Target Keywords by Page

### Homepage:
- Hygrix
- Infection control solutions
- Biohazard spill management
- Healthcare spill kits
- Hospital disinfectants

### Product Pages:
- Product-specific keywords (e.g., "biohazard spill kit")
- Brand + product name
- Product category keywords
- Use case keywords

### Blog:
- Long-tail informational keywords
- How-to queries
- Best practices topics
- Industry news and updates

---

## Contact for Updates

For technical SEO support or questions about implementation:
- Website: www.hygrix.com
- Review metadata quarterly and after major product launches

---

**Document Version:** 1.0  
**Last Updated:** January 22, 2026  
**Next Review:** April 22, 2026
