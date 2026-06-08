/**
 * 站点配置 — 替换图片时只需修改 heroImage 路径
 */
export const siteConfig = {
  brand: "VEARA",
  tagline: "Essentials, Elevated",
  statement: "Less noise. More presence.",
  description: "简约街头美学，以品质面料与利落剪裁定义日常穿搭。",
  heroImage: "/images/hero-product.jpg",
  heroProduct: {
    name: "Box Fit Tee",
    subtitle: "重磅纯棉 · 落肩版型",
    price: 299,
    season: "SS 2026",
    code: "V001",
  },
  navLinks: [
    { label: "系列", href: "#collection" },
    { label: "焦点", href: "#featured" },
    { label: "品牌", href: "#about" },
  ],
  products: [
    { id: 1, name: "Box Fit Tee", price: 299, image: "/images/hero-product.jpg", tag: "Core", span: "large" as const },
    { id: 2, name: "Oversized Hoodie", price: 459, image: "/images/hero-product.jpg", tag: "New", span: "small" as const },
    { id: 3, name: "Relaxed Joggers", price: 389, image: "/images/hero-product.jpg", tag: null, span: "small" as const },
    { id: 4, name: "Essential Cap", price: 159, image: "/images/hero-product.jpg", tag: "Limited", span: "medium" as const },
  ],
  pillars: [
    { num: "01", title: "极简", desc: "去除多余，保留本质。" },
    { num: "02", title: "品质", desc: "高克重面料，经久耐穿。" },
    { num: "03", title: "日常", desc: "为每一天而设计。" },
  ],
} as const;
