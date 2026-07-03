// 品牌站的主要文案和导航都集中在这里，后续改字尽量只动这一处。
export const siteConfig = {
  brand: "Veara",
  image: "/images/black.jpg",
  imageAlt: "Veara black draped hoodie laid flat with visible label detail.",
  description: "Veara 以安静、干净、耐穿的黑色单品，整理日常衣橱的轮廓感。",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Edition", href: "#edition" },
    { label: "Notes", href: "#notes" },
  ],
  hero: {
    kicker: "Edition 01 / Quiet Black",
    title: "A calm uniform for everyday hours.",
    description:
      "Veara 不强调喧闹的设计语言，而是把重点放回线条、垂感和触感本身。黑色足够克制，也足够完整，适合被长时间穿着。",
    note:
      "品牌气质来自安静的完成度，而不是密集的视觉刺激。",
  },
  about: {
    title: "Veara keeps things simple on purpose.",
    body:
      "这个品牌更在意穿上之后的状态: 看起来整洁、不过度用力、可以自然进入通勤、出行和日常停留的每个场景。",
    quote:
      "Less noise, more line. Less decoration, more finish.",
  },
  principles: [
    {
      title: "Clean silhouette",
      body: "轮廓清楚，线条不过分夸张，能稳定地适配日常搭配。",
    },
    {
      title: "Soft structure",
      body: "保持垂感和柔顺表面，让黑色看起来不压迫、不沉闷。",
    },
    {
      title: "Quiet branding",
      body: "品牌信息留在近距离，而不是抢走穿着者本身的存在感。",
    },
  ],
  edition: {
    title: "Edition 01 focuses on one clear impression.",
    body:
      "一件黑色单品就足够传达 Veara 的方向: 干净、利落、不过载。没有多余动作，也不依赖复杂效果，靠材质与轮廓完成表达。",
    details: [
      "适合单穿，也适合叠搭外层。",
      "视觉重点放在帽型、抽绳与整体垂坠感。",
      "黑色作为统一底色，更容易形成稳定衣橱。",
    ],
  },
  notes: [
    "黑色不是隐藏，而是让比例和表面更清楚地被看到。",
    "真正耐看的单品，不需要靠动画、滤镜或堆叠信息来证明自己。",
    "Veara 想呈现的是一种安静但完成度很高的日常状态。",
  ],
  footerNote: "Built for a steadier, quieter wardrobe.",
} as const;
