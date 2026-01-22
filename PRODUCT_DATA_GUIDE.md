# Product Data Structure for SEO

## Guidelines for Updating data.json

To ensure optimal SEO for your products, each product in `data.json` should include these fields:

```json
{
  "id": 1,
  "name": "Hygrix Biohazard Spill Kit Max",
  "partNumber": "HBSK1001",
  "slug": "biohazard-spill-kit-max",
  "category": "Spill Kits",
  "shortDescription": "All-in-one biohazard spill containment solution",
  "description": "Hygrix' Biohazard All-In-One Spill Kit Max is a unique solution to address biohazard spills. New and innovative technology in the form of our absorbent powder now allows you to contain spills including blood and saliva, as well as urine and vomit. A result of proprietary technology from Hygrix, provide faster liquid absorption with increased versatility, suitable for the neutralisation of acids, amines, and odours.",
  "price": 49.99,
  "currency": "USD",
  "inStock": true,
  "image": "/products/biohazard-spill-kit-max.jpg",
  "images": [
    "/products/biohazard-kit-1.jpg",
    "/products/biohazard-kit-2.jpg",
    "/products/biohazard-kit-3.jpg"
  ],
  "features": [
    "Contains spills including blood and saliva",
    "Absorbent powder with fast liquid absorption",
    "Includes disinfectant tablets for surface decontamination",
    "Complete PPE kit included",
    "Cardboard scoop and scraper (eco-friendly)",
    "Suitable for acids, amines, and odour neutralisation"
  ],
  "specifications": {
    "dimensions": "30cm x 25cm x 10cm",
    "weight": "1.2kg",
    "caseMaterial": "Hard Yellow Plastic",
    "mounting": "Wall Mount Included",
    "certification": "CE Marked, BS EN Standards"
  },
  "usage": [
    "Put on provided PPE (gloves, apron)",
    "Sprinkle absorbent powder over spill",
    "Wait 30 seconds for absorption",
    "Use scoop to collect solidified material",
    "Place in clinical waste bag",
    "Clean surface with disinfectant tablets",
    "Dispose according to local regulations"
  ],
  "contents": [
    "1 x pair nitrile gloves",
    "1 x apron",
    "1 x Life Protected Multi-Purpose Sorbent Powder",
    "1 x Hygrix dilution pot",
    "1 x cardboard scoop and scraper",
    "1 x clinical waste bags",
    "4 x Hygrix TAB chlorine tablets",
    "1 x Hygrix biopolymer applicator"
  ],
  "applications": [
    "Healthcare facilities",
    "Hospitals and clinics",
    "Laboratories",
    "Nursing homes",
    "Emergency services",
    "Schools and universities"
  ],
  "certifications": [
    "BS EN 1276 - Bactericidal activity",
    "BS EN 14476 - Virucidal activity",
    "BS EN 13704 - Sporicidal activity",
    "CDC Guidelines compliant",
    "WHO Guidelines compliant"
  ],
  "keywords": [
    "biohazard spill kit",
    "blood spill kit",
    "infection control",
    "spill management",
    "healthcare safety"
  ],
  "rating": 4.8,
  "reviewCount": 127,
  "metaTitle": "Biohazard Spill Kit Max - Professional Hygrix Solution",
  "metaDescription": "All-in-one biohazard spill kit with absorbent powder, disinfectant tablets, and complete PPE. Fast containment for blood, saliva, urine and vomit spills."
}
```

## Required Fields for SEO

### Essential (Must Have)
- `id` - Unique identifier
- `name` - Product name (SEO-friendly)
- `category` - For filtering and breadcrumbs
- `description` - Full description (150+ words recommended)
- `image` - Main product image (high quality)

### Recommended (Should Have)
- `partNumber` - SKU/Model number
- `slug` - URL-friendly identifier
- `shortDescription` - Brief summary
- `price` - For product schema
- `inStock` - Availability status
- `images` - Multiple product images
- `features` - Key selling points
- `specifications` - Technical details

### SEO Optimized (Nice to Have)
- `metaTitle` - Custom page title (50-60 chars)
- `metaDescription` - Custom description (150-160 chars)
- `keywords` - Target keywords array
- `rating` - Average star rating
- `reviewCount` - Number of reviews
- `certifications` - Industry certifications
- `applications` - Use cases

## Example Products from PDF

### 1. Hygrix Absorbency Granules
```json
{
  "id": 2,
  "name": "Hygrix Absorbency Granules",
  "partNumber": "HAG2000",
  "slug": "absorbency-granules-200g",
  "category": "Absorbents",
  "shortDescription": "High absorbency granules for spill containment",
  "description": "Hygrix Absorbency Granules are designed for spill containment and removal of biohazards such as urine and vomit. Each shaker contains 200g of granules which is capable of absorbing up to 20 litres of liquid. In addition to spill containment and removal, granules can be used to ensure safe transportation of liquid clinical waste. High Absorbency Granules are also ideal for use with bedpans, vomit bowls and urine bottles. Suitable for use on hard and soft surfaces in all areas. Granules are mildly perfumed to help neutralise unpleasant odours.",
  "price": 12.99,
  "inStock": true,
  "image": "/products/absorbency-granules-200g.jpg",
  "features": [
    "200g absorbs up to 20 litres of liquid",
    "Suitable for urine and vomit",
    "Mildly perfumed",
    "Safe for hard and soft surfaces",
    "Ideal for bedpans and vomit bowls"
  ],
  "specifications": {
    "weight": "200g",
    "absorbency": "Up to 20L",
    "packaging": "Shaker bottle"
  },
  "applications": [
    "Healthcare facilities",
    "Care homes",
    "Transport vehicles",
    "Clinical waste management"
  ],
  "metaTitle": "Absorbency Granules 200g - High Capacity Spill Control",
  "metaDescription": "Professional absorbent granules for healthcare. 200g absorbs up to 20L of liquid. Ideal for urine, vomit containment. Mildly perfumed, safe on all surfaces."
}
```

### 2. Hygrix Bleach Wipes
```json
{
  "id": 3,
  "name": "Hygrix Bleach Wipes",
  "partNumber": "HBW1200",
  "slug": "bleach-wipes-90-pack",
  "category": "Disinfectants",
  "shortDescription": "Pre-soaked sporicidal disinfectant wipes",
  "description": "Hygrix Bleach Wipes are pre-soaked, ready-to-use sporicidal wipes for use on hard, non-porous surfaces in professional setting. Virucidal, Bactericidal, Fungicidal Tuberculocidal and Sporicidal with short exposure time of 3 minutes or less. Heavily saturated wipes in canisters of 90, providing excellent cleaning efficacy. Ideal for terminal, isolation and outbreak cleaning.",
  "price": 24.99,
  "inStock": true,
  "image": "/products/bleach-wipes-canister.jpg",
  "features": [
    "90 large, pre-soaked wipes per canister",
    "Virucidal, bactericidal, fungicidal",
    "Tuberculocidal and sporicidal",
    "3 minutes contact time",
    "Heavily saturated",
    "Ready to use - no preparation needed"
  ],
  "specifications": {
    "quantity": "90 wipes",
    "contactTime": "3 minutes",
    "packaging": "Canister",
    "wipeSize": "Large"
  },
  "applications": [
    "Terminal cleaning",
    "Isolation rooms",
    "Outbreak cleaning",
    "Environmental cleaning",
    "Bed spaces and patient areas",
    "Commodes and toilets"
  ],
  "certifications": [
    "Virucidal tested",
    "Bactericidal certified",
    "Sporicidal efficacy"
  ],
  "metaTitle": "Bleach Wipes 90pk - Sporicidal Disinfectant Wipes",
  "metaDescription": "Pre-soaked bleach wipes for professional disinfection. Virucidal, bactericidal, sporicidal. 3-minute contact time. 90 heavily saturated wipes per canister."
}
```

### 3. Hygrix CL TAB Tablets
```json
{
  "id": 4,
  "name": "Hygrix CL TAB Tablets",
  "partNumber": "BNG1233",
  "slug": "cl-tab-tablets-200-pack",
  "category": "Disinfectants",
  "shortDescription": "NaDCC chlorine disinfectant tablets",
  "description": "Essential in infection prevention and control (IPC), Hygrix CL TABs (Sodium dichloroisocyanurate, NaDCC) is a smart, sustainable precursor to hypochlorous acid – a chlorine-based, safe and powerful solution to disinfection. With a portfolio of ready-to-use tablets, Hygrix CL TAB tablets dissolve to formulate the correct concentration of disinfectant, simplifying disinfection processes and eliminating product waste. Efficacious against mycobacteria, spore-forming bacteria and non-enveloped viruses. Suitable for high-level and outbreak disinfection.",
  "price": 39.99,
  "inStock": true,
  "image": "/products/cl-tab-tablets.jpg",
  "features": [
    "NaDCC formula - safe and powerful",
    "200 tablets per pack",
    "Dissolves to correct concentration",
    "100x more effective than household bleach",
    "Biodegradable and non-toxic",
    "Small composition for easy transport"
  ],
  "specifications": {
    "activeIngredient": "Sodium dichloroisocyanurate (NaDCC)",
    "tabletWeight": "3.3g",
    "nadccContent": "1.7g per tablet",
    "quantity": "200 tablets",
    "packaging": "Sealed container"
  },
  "applications": [
    "Terminal disinfection",
    "Isolation cleaning",
    "Outbreak control",
    "Environmental hygiene",
    "Surface disinfection",
    "High-level disinfection"
  ],
  "certifications": [
    "BS EN 1650",
    "BS EN 13704",
    "BS EN 1276",
    "BS EN 14476 (Adenovirus)",
    "BS EN 14476 (Poliovirus)",
    "BS EN 14348",
    "BS EN 13624",
    "BS EN 13727",
    "BS EN 13697",
    "CDC Guidelines compliant",
    "WHO Guidelines compliant"
  ],
  "metaTitle": "CL TAB Tablets 200pk - NaDCC Chlorine Disinfectant",
  "metaDescription": "Professional NaDCC tablets for infection control. 100x more effective than bleach. CDC and WHO compliant. 200 tablets with broad-spectrum antimicrobial action."
}
```

### 4. Hygrix Cytotoxic Spill Kit
```json
{
  "id": 5,
  "name": "Hygrix Cytotoxic Spill Kit",
  "partNumber": "HCSK2001",
  "slug": "cytotoxic-spill-kit",
  "category": "Spill Kits",
  "shortDescription": "Complete cytotoxic spill management solution",
  "description": "This spill kit is curated to manage cytotoxic spills, including chemotherapeutic, cytotoxic and cytostatic drugs. Equipped with the necessary components to manage both liquid and powder spills, this kit is ideal for use in hospitals, laboratories, pharmacies and other areas where cytotoxic substances are handled. Includes sterile water pods, absorbent pads, Cyto absorbent granules, and Cygrix neutralizing powder for complete decontamination.",
  "price": 89.99,
  "inStock": true,
  "image": "/products/cytotoxic-spill-kit.jpg",
  "features": [
    "Manages liquid and powder spills",
    "Includes specialized Cyto absorbent granules",
    "Cygrix powder for neutralization",
    "Complete PPE for two people",
    "Sterile water pods for powder cleanup",
    "Clear instruction sheet included"
  ],
  "contents": [
    "2 x PPE packs (3 gloves, 3 gowns, 3 masks each)",
    "3 x sterile water pods",
    "3 x absorbent pads",
    "3 x LP Sorbent Powder sachets",
    "3 x Cygrix Powder 10g sachets",
    "3 x cytotoxic waste bags",
    "1 x instruction sheet",
    "1 x warning sign",
    "1 x 250ml diluter"
  ],
  "specifications": {
    "ppePacks": 2,
    "spillCapacity": "Multiple spills",
    "packaging": "Large sealed sachets"
  },
  "applications": [
    "Oncology departments",
    "Hospital pharmacies",
    "Research laboratories",
    "Chemotherapy preparation areas",
    "Academic institutions"
  ],
  "metaTitle": "Cytotoxic Spill Kit - Chemotherapy Spill Management",
  "metaDescription": "Professional cytotoxic spill kit for hospitals and labs. Manages chemo drug spills (liquid & powder). Complete PPE, neutralizing powder, and disposal bags."
}
```

## Blog Data Structure

For optimal blog SEO, include:

```json
{
  "id": 1,
  "title": "Best Practices for Biohazard Spill Management in Healthcare",
  "slug": "biohazard-spill-management-best-practices",
  "excerpt": "Learn essential techniques for safe and effective biohazard spill containment in healthcare facilities. Expert guidance from Hygrix professionals.",
  "category": "Infection Control",
  "tags": ["spill management", "healthcare safety", "infection control", "best practices"],
  "author": "Dr. Sarah Johnson",
  "authorBio": "Senior Infection Control Specialist",
  "authorImage": "/authors/sarah-johnson.jpg",
  "date": "2026-01-15",
  "updatedDate": "2026-01-20",
  "readTime": "8 min read",
  "image": "/blog/biohazard-spill-management.jpg",
  "featured": true,
  "content": "Full blog content here...",
  "relatedProducts": [1, 2, 4],
  "metaTitle": "Biohazard Spill Management Best Practices | Hygrix",
  "metaDescription": "Expert guide to biohazard spill management in healthcare. Learn proper containment, PPE use, disinfection protocols, and compliance standards. Read more."
}
```

## SEO Optimization Tips

### Product Names
- Keep under 60 characters
- Include key identifier (size, model)
- Use descriptive terms
- Avoid special characters

### Descriptions
- First 160 characters are crucial (used in meta)
- Include primary keywords naturally
- Highlight key benefits
- Use clear, professional language
- Break into paragraphs for readability

### Keywords
- 5-10 relevant keywords per product
- Mix of broad and specific terms
- Include industry terminology
- Consider user search intent
- Don't stuff - use naturally

### Images
- High resolution (1200x1200px minimum)
- Multiple angles when possible
- Descriptive file names (product-name-front.jpg)
- Consistent background/style
- Under 500KB optimized

### Categories
Use standardized categories:
- Spill Kits
- Disinfectants
- Absorbents
- PPE & Safety
- Cleaning Products
- Accessories

## Validation Checklist

For each product, verify:
- [ ] Unique, descriptive name
- [ ] Complete description (150+ words)
- [ ] High-quality main image
- [ ] Part number/SKU
- [ ] Category assignment
- [ ] Key features listed (5-10)
- [ ] Technical specifications
- [ ] Usage instructions
- [ ] Applications listed
- [ ] Price and availability
- [ ] Custom meta title (if needed)
- [ ] Custom meta description (if needed)
- [ ] Relevant keywords
- [ ] Certifications (if applicable)

## Import Data Template

Use this template to add new products:

```json
{
  "id": 0,
  "name": "",
  "partNumber": "",
  "slug": "",
  "category": "",
  "shortDescription": "",
  "description": "",
  "price": 0.00,
  "inStock": true,
  "image": "/products/.jpg",
  "features": [],
  "specifications": {},
  "applications": [],
  "metaTitle": "",
  "metaDescription": "",
  "keywords": []
}
```

---

**Remember**: Good product data = Better SEO = More conversions!
