export const SEO_KEYWORDS = {
  // Primary Keywords (High Volume, High Intent)
  primary: [
    "kemasan custom indonesia",
    "mesin pengemasan otomatis",
    "supplier kemasan B2B",
    "mesin packaging indonesia",
    "standing pouch custom"
  ],
  
  // Long-tail Keywords (Specific, High Converting)
  longTail: [
    "jual mesin pengisi cairan otomatis jakarta",
    "supplier kemasan paperfoil untuk UKM",
    "mesin sealing vacuum packaging terbaik",
    "kemasan standing pouch dengan zipper custom",
    "mesin labeling otomatis harga terjangkau"
  ],
  
  // Local SEO Keywords
  local: [
    "supplier kemasan jakarta",
    "mesin pengemasan jakarta",
    "kemasan custom jakarta selatan",
    "distributor mesin packaging indonesia",
    "pabrik kemasan jakarta"
  ],
  
  // Industry-specific Keywords
  industry: [
    "kemasan makanan UKM",
    "kemasan minuman sachet",
    "kemasan kosmetik custom",
    "kemasan obat herbal",
    "kemasan bumbu dapur"
  ],
  
  // Machine-specific Keywords
  machines: [
    "mesin pengisi cairan semi otomatis",
    "mesin vacuum sealing makanan",
    "mesin labeling botol otomatis",
    "mesin heat sealing plastik",
    "mesin cutting kemasan"
  ]
}

export const PAGE_SEO_CONFIG = {
  home: {
    title: "Akapack - Solusi Kemasan Custom & Mesin Pengemasan untuk UKM Indonesia",
    keywords: [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.longTail.slice(0, 3)],
    description: "Penyedia terpercaya kemasan custom, mesin pengemasan otomatis, dan layanan percetakan untuk UKM Indonesia. Solusi B2B berkualitas tinggi, harga kompetitif."
  },
  
  products: {
    title: "Produk Kemasan Custom & Mesin Pengemasan Berkualitas",
    keywords: [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.industry],
    description: "Katalog lengkap kemasan custom dan mesin pengemasan untuk berbagai industri. Standing pouch, paperfoil, vacuum sealing, dan mesin otomatis."
  },
  
  machines: {
    title: "Mesin Pengemasan Otomatis & Semi Otomatis Terbaik",
    keywords: [...SEO_KEYWORDS.machines, ...SEO_KEYWORDS.longTail.slice(0, 2)],
    description: "Jual mesin pengemasan berkualitas tinggi: pengisi cairan, vacuum sealing, labeling otomatis. Garansi resmi, training gratis, after-sales terbaik."
  }
} 