export const site = {
  name: "ADWA Studio",
  tagline: "Building Africa's Next Global Champions.",
  email: "hello@adwa.studio",
  phone: "",
  address: "Africa · Global",
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
};

export const navLinks = [
  { label: "Ventures", href: "/ventures" },
  { label: "Vision", href: "/#vision" },
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Why ADWA", href: "/#why-adwa" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  headline: "Building Africa's Next Global Champions.",
  body: "From the historic victory at Adwa to the rise of Africa's next business champions, we embody the spirit of defying expectations and forging new paths. As a venture studio, we don't just invest – we build, shape, and scale companies that will define Africa's future on the global stage.",
};

export const vision = {
  title: "Our Vision",
  body: "We see an Africa where breakthrough ventures aren't the exception, but the norm. Where innovative founders don't just participate in the global economy – they shape it. Where the next generation of world-class companies is built from African soil, with African talent, for global impact.",
  pillars: [
    {
      label: "01",
      text: "Breakthrough ventures aren't the exception — they're the norm.",
    },
    {
      label: "02",
      text: "Founders don't just participate in the global economy — they shape it.",
    },
    {
      label: "03",
      text: "World-class companies built from African soil, with African talent, for global impact.",
    },
  ],
};

export const whatWeDo = {
  title: "What We Do",
  intro:
    "We combine deep operational expertise, strategic capital, and unmatched continental knowledge to:",
  items: [
    {
      title: "Co-create",
      body: "Co-create ventures alongside exceptional founders",
      icon: "spark",
    },
    {
      title: "Support",
      body: "Provide hands-on operational support and resources",
      icon: "gear",
    },
    {
      title: "Scale",
      body: "Build sustainable businesses that can scale globally",
      icon: "growth",
    },
    {
      title: "Connect",
      body: "Connect African innovation with world-class opportunities",
      icon: "globe",
    },
  ],
};

export const whyAdwa = {
  title: "Why ADWA",
  body: "Just as the Battle of Adwa marked a turning point in African history, we're here to help write the next chapter in Africa's business story. Our name carries the legacy of victory against overwhelming odds, and our mission is to empower entrepreneurs who share that same audacious spirit.",
};

export const teamIntro =
  "Meet The Team — We have shipped products inside YouTube, Amazon, and Google, designed systems that handle massive scale, created companies, and supported creators across Africa leading to the founding of Oyana.";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Daps",
    role: "Product",
    bio: "Spent two decades building products at YouTube, Amazon, and Google before starting Oyana to help creators grow.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    name: "François",
    role: "Architect",
    bio: "Architected large-scale systems at Amazon and Google, then designed the backend that powers Oyana.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
  },
  {
    name: "Arlene",
    role: "Operations",
    bio: "Ran global teams at GE Healthcare and Royal Philips. At Oyana, she touches everything except the code.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    name: "Nathan",
    role: "Engineer",
    bio: "Turns ideas into prototypes, keeps engineering on track, and helps with marketing analytics.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  },
  {
    name: "Tochie",
    role: "Marketing",
    bio: "Storyteller who sweats the details. Leads brand awareness and creator relationships at Oyana.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
  },
];

export type Venture = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  image: string;
  placeholder?: boolean;
};

export const ventures: Venture[] = [
  {
    slug: "oyana",
    name: "Oyana",
    tagline: "AI-powered analytics and growth tools for YouTube creators",
    description:
      "Oyana helps YouTube creators understand their audience, optimize their content, and grow smarter with AI-driven analytics — built by a team that shipped products inside YouTube, Amazon, and Google.",
    href: "https://oyana.ai",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e11e480f?w=1600&q=80",
  },
  {
    slug: "acutemeter",
    name: "Acutemeter",
    tagline: "Precision insights for modern operators",
    description:
      "[PLACEHOLDER] Verified Acutemeter tagline and description pending — swap this copy when ready.",
    href: "https://acutemeter.com",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    placeholder: true,
  },
];

export const testimonials = [
  {
    quote:
      "ADWA doesn't just write checks — they build beside you, with the scars and systems of operators who've shipped at scale.",
    name: "Portfolio founder",
    role: "Venture partner",
  },
  {
    quote:
      "Continental knowledge plus world-class product craft. That's a rare combination — and it's why we chose ADWA.",
    name: "Operator",
    role: "Studio collaborator",
  },
  {
    quote:
      "From Adwa's legacy to today's ventures — the ambition is unmistakable, and the execution matches it.",
    name: "Advisor",
    role: "Ecosystem partner",
  },
  {
    quote:
      "They connect African innovation to global opportunity without losing the soul of where it started.",
    name: "Creator",
    role: "Oyana community",
  },
];

export const logos = [
  "YouTube",
  "Amazon",
  "Google",
  "Oyana",
  "Acutemeter",
  "GE Healthcare",
  "Philips",
];

export const services = [
  {
    id: "build",
    title: "Build",
    summary: "Co-create ventures from zero to product-market fit.",
    body: "We sit with founders to shape the company — product, brand, and operating model — not as advisors on the sidelines, but as builders in the room.",
    items: [
      "Venture co-creation",
      "Product & platform design",
      "Technical architecture",
      "Go-to-market foundations",
    ],
  },
  {
    id: "scale",
    title: "Scale",
    summary: "Hands-on support when growth gets real.",
    body: "Operational expertise from teams who've shipped inside YouTube, Amazon, and Google — applied to African ventures ready for global stages.",
    items: [
      "Operational playbooks",
      "Engineering leadership",
      "Growth & analytics",
      "Team building",
    ],
  },
  {
    id: "connect",
    title: "Connect",
    summary: "Capital, networks, and continental knowledge.",
    body: "Strategic capital paired with unmatched context across African markets — opening doors that capital alone cannot.",
    items: [
      "Strategic capital",
      "Partner introductions",
      "Market intelligence",
      "Global opportunity mapping",
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "spirit-of-adwa",
    title: "The spirit of Adwa in modern venture building",
    excerpt:
      "Why our name is a mandate — victory against odds, built with African talent for global impact.",
    date: "2026-03-12",
    tags: ["Studio", "Vision"],
    image:
      "https://images.unsplash.com/photo-1489392191049-34982dda90cc?w=1200&q=80",
    body: [
      "The Battle of Adwa is more than history to us — it is a design brief for how we build companies.",
      "We partner with founders who refuse to accept that African ventures must play small on the world stage.",
      "That audacity is the through-line from 1896 to every company we help shape today.",
    ],
  },
  {
    slug: "operators-not-spectators",
    title: "Operators, not spectators",
    excerpt:
      "How shipping inside YouTube, Amazon, and Google shapes how we co-create with founders.",
    date: "2026-02-04",
    tags: ["Team", "Building"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    body: [
      "Capital without craft is incomplete. Our team has built products and systems at global scale.",
      "That experience shows up in the prototypes we ship, the architectures we choose, and the ops we install.",
      "We measure ourselves by what founders can ship next week — not by slide decks.",
    ],
  },
  {
    slug: "from-african-soil",
    title: "From African soil, for global impact",
    excerpt:
      "Building world-class companies where the talent already is — and connecting them outward.",
    date: "2026-01-18",
    tags: ["Africa", "Ventures"],
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
    body: [
      "The next generation of global champions will not all be born in the same three cities.",
      "ADWA exists to make breakthrough ventures the norm — not the exception — across the continent.",
      "We connect African innovation with world-class opportunities without extracting the soul of the work.",
    ],
  },
];

export const blogTags = Array.from(
  new Set(blogPosts.flatMap((p) => p.tags)),
).sort();

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getVenture(slug: string) {
  return ventures.find((v) => v.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** @deprecated kept for old work routes during transition */
export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  blurb: string;
  tags: string[];
  year: string;
  image: string;
  videoPoster: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  chapters: { title: string; body: string; image: string }[];
};

export const caseStudies: CaseStudy[] = ventures.map((v) => ({
  slug: v.slug,
  title: v.name,
  client: "ADWA Studio",
  blurb: v.tagline,
  tags: ["Venture"],
  year: "2026",
  image: v.image,
  videoPoster: v.image,
  challenge: v.description,
  approach: v.description,
  outcome: v.description,
  metrics: [],
  chapters: [],
}));

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
