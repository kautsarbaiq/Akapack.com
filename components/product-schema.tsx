interface ProductSchemaProps {
  name: string
  description: string
  image: string
  price?: string
  currency?: string
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder'
  category: string
  brand?: string
  sku?: string
}

export default function ProductSchema({
  name,
  description,
  image,
  price,
  currency = 'IDR',
  availability = 'InStock',
  category,
  brand = 'Akapack',
  sku
}: ProductSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": `https://akapack.com${image}`,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "category": category,
    "sku": sku,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": `https://schema.org/${availability}`,
      "seller": {
        "@type": "Organization",
        "name": "Akapack Indonesia"
      }
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Akapack Indonesia",
      "url": "https://akapack.com"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  )
} 