export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  subtitle: string;
  category: string;
  stack: string[];
  description: string;
  highlights: string[];
  links: LinkItem[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const profile = {
  name: "Muhammad Ali Saqib",
  tagline: "Backend & AI Systems",
  location: "CS undergraduate at NUST",
  email: "muhammadalisaqib2006@gmail.com",
  hero:
    "I build backend-heavy AI products, RAG pipelines, APIs, and database-backed software. I like working close to the systems layer: retrieval, data modeling, auth, structured LLM output, and the product workflows around them.",
  github: "https://github.com/malisaqib",
  linkedin: "https://linkedin.com/in/m-ali-saqib",
};

export const navItems: LinkItem[] = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroActions: LinkItem[] = [
  { label: "View Projects", href: "#work" },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email Me", href: `mailto:${profile.email}` },
];

export const focusAreas = [
  "Backend APIs",
  "RAG and vector search",
  "PostgreSQL systems",
  "Production AI workflows",
];

export const projects: Project[] = [
  {
    title: "Zorfit",
    subtitle: "AI Fitness Coaching Platform",
    category: "AI Product / Backend / RAG",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Groq",
      "Gemini",
      "pgvector",
    ],
    description:
      "A mobile-first AI fitness PWA for personalized diet plans, workout plans, natural-language meal logging, and calorie/protein tracking. The system is built around South Asian foods, desi portions, and Roman Urdu food input.",
    highlights: [
      "Built a hybrid retrieval pipeline with Gemini embeddings, pgvector, Postgres trigram search, and alias expansion.",
      "Converted meal text like \"2 roti, daal\" into structured nutrition JSON using Groq/Llama.",
      "Unified a 7,900-item food database with per-100g nutrition normalization.",
      "Added deterministic grounding checks to reduce unsupported AI nutrition outputs.",
      "Secured user data using Supabase Auth and Row Level Security.",
    ],
    links: [
      { label: "Live", href: "https://www.zorfit.app" },
      { label: "GitHub", href: "https://github.com/malisaqib" },
    ],
  },
  {
    title: "AI Disaster Management System",
    subtitle: "Emergency-response coordination and decision support",
    category: "AI / Backend / RAG",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "ChromaDB",
      "Groq",
      "Streamlit",
    ],
    description:
      "A multi-role emergency-response platform for disaster resource coordination, situational context, and decision support.",
    highlights: [
      "Built a FastAPI backend with PostgreSQL schemas, migrations, ENUM types, triggers, stored procedures, and analytical views.",
      "Implemented a RAG pipeline with ChromaDB and Sentence Transformers.",
      "Used Groq Llama 3.3 70B for context-aware emergency support responses.",
      "Added geospatial dashboards with Pandas and Folium.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/malisaqib" }],
  },
  {
    title: "Samko Lubricants",
    subtitle: "Business Website + AI Chatbot",
    category: "Client Work / Web App / AI Chatbot",
    stack: ["React", "Next.js"],
    description:
      "A responsive production website for a real client, with an AI chatbot for customer and product queries.",
    highlights: [
      "Built a component-based web app with clean routing.",
      "Deployed a custom AI chatbot for product/customer questions.",
      "Delivered the project from requirements through deployment.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/malisaqib" }],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "REST APIs", "server-side logic", "Node.js basics"],
  },
  {
    title: "AI / LLM Systems",
    skills: [
      "RAG pipelines",
      "LLM APIs",
      "Groq/Llama",
      "Gemini",
      "embeddings",
      "structured output",
      "semantic search",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "Supabase",
      "pgvector",
      "ChromaDB",
      "SQL",
      "Row Level Security",
      "migrations",
      "triggers",
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
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "ESLint", "Node test runner", "Maven"],
  },
];

export const experience = {
  role: "Frontend Developer Intern",
  company: "OctiLearn",
  location: "Dubai, UAE",
  dates: "June 2024 - August 2024",
  bullets: [
    "Built reusable React components and dynamic routing for an EdTech platform.",
    "Integrated backend REST APIs.",
    "Worked with Git/GitHub in a remote team.",
  ],
};

export const education = {
  school: "National University of Sciences and Technology (NUST)",
  degree: "BS Computer Science",
  dates: "Sep 2025 - Expected 2029",
};

export const siteDescription =
  "CS student at NUST building backend-heavy AI products, RAG pipelines, APIs, and production software.";
