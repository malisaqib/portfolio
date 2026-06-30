export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  category: string;
  title: string;
  description: string;
  tech: string[];
  links: LinkItem[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type TimelineItem = {
  title: string;
  meta: string;
  dates: string;
  description: string;
};

export type SocialLink = {
  label: string;
  value: string;
  href: string;
};

export const profile = {
  name: "Muhammad Ali Saqib",
  shortName: "Ali.",
  tagline: "Backend & AI Systems",
  location: "CS undergraduate at NUST",
  email: "muhammadalisaqib2006@gmail.com",
  github: "https://github.com/malisaqib",
  linkedin: "https://www.linkedin.com/in/m-ali-saqib",
};

export const navItems: LinkItem[] = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "GitHub", href: profile.github },
];

export const heroActions: LinkItem[] = [
  { label: "View Work", href: "#work" },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const projectFilters = [
  "All",
  "AI",
  "Backend",
  "RAG",
  "Web App",
  "SaaS",
  "Security",
  "Client Work",
];

export const projects: Project[] = [
  {
    category: "AI Product",
    title: "Zorfit",
    description:
      "AI fitness coaching PWA for personalized diet plans, workout plans, natural-language meal logging, and calorie/protein tracking. Built around South Asian foods, Roman Urdu input, and grounded nutrition data.",
    tech: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "Groq",
      "Gemini",
      "RAG",
    ],
    links: [
      { label: "Live", href: "https://www.zorfit.app" },
      { label: "GitHub", href: "https://github.com/malisaqib/gym-app" },
    ],
  },
  {
    category: "AI / SaaS",
    title: "Store Readiness Audit",
    description:
      "Shopify product audit tool that extracts product data, scores listing quality with deterministic heuristics, and generates grounded AI rewrite suggestions. Includes Supabase-backed lead capture for follow-up requests.",
    tech: ["Next.js", "TypeScript", "Supabase", "Groq", "Shopify", "Tailwind"],
    links: [
      { label: "GitHub", href: "https://github.com/malisaqib/audit_tool" },
    ],
  },
  {
    category: "AI / Backend",
    title: "AI Disaster Management System",
    description:
      "Emergency-response coordination platform with FastAPI, PostgreSQL, RAG-based decision support, ChromaDB retrieval, and geospatial dashboards.",
    tech: ["Python", "FastAPI", "PostgreSQL", "ChromaDB", "Groq", "Streamlit"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/malisaqib/AI-disaster-management",
      },
    ],
  },
  {
    category: "Security / Web App",
    title: "Cipher Stack",
    description:
      "Interactive cipher pipeline builder for chaining text transformations, running encrypt/decrypt flows, and previewing each step. Supports ciphers like Caesar, XOR, Vigenere, Rail Fence, Columnar, Base64, and Reverse.",
    tech: ["React", "Vite", "JavaScript", "Motion", "Drag and Drop", "Ciphers"],
    links: [
      { label: "GitHub", href: "https://github.com/malisaqib/cipher_stack" },
    ],
  },
  {
    category: "Client Work",
    title: "Samko Lubricants",
    description:
      "Responsive business website for a real client with product pages, optimized routing, and an AI chatbot for customer and product queries.",
    tech: ["Next.js", "React", "AI Chatbot"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/malisaqib/samko-lubricants",
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "REST APIs", "Server-side logic", "Node.js basics"],
  },
  {
    title: "AI / LLM Systems",
    skills: [
      "RAG pipelines",
      "LLM APIs",
      "Groq/Llama",
      "Gemini",
      "Embeddings",
      "Structured output",
      "Semantic search",
    ],
  },
  {
    title: "Data & Vectors",
    skills: [
      "PostgreSQL",
      "Supabase",
      "pgvector",
      "ChromaDB",
      "SQL",
      "Row Level Security",
      "Migrations",
      "Triggers",
    ],
  },
  {
    title: "Web",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "PWA",
    ],
  },
  {
    title: "Tooling",
    skills: ["Git", "GitHub", "Vercel", "ESLint", "Node test runner", "Maven"],
  },
];

export const timelineItems: TimelineItem[] = [
  {
    title: "Frontend Developer Intern",
    meta: "OctiLearn, Dubai, UAE",
    dates: "June 2024 - August 2024",
    description:
      "Built reusable React components, dynamic routing, integrated backend REST APIs, and collaborated remotely using Git/GitHub.",
  },
  {
    title: "BS Computer Science",
    meta: "National University of Sciences and Technology",
    dates: "Sep 2025 - Expected 2029",
    description:
      "Coursework includes Database Systems, Object-Oriented Programming, Discrete Mathematics, Linear Algebra, and Calculus.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    value: "malisaqib",
    href: profile.github,
  },
  {
    label: "LinkedIn",
    value: "Muhammad Ali Saqib",
    href: profile.linkedin,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
];

export const siteDescription =
  "CS student at NUST building backend-heavy AI products, RAG pipelines, APIs, and production software.";
