/**
 * Single source of truth for personal facts.
 *
 * Anything not yet confirmed is `null`. The UI hides null fields entirely, so
 * no placeholder text ever reaches production. Fill a value in here and the
 * matching link, button or section appears automatically.
 */

export interface ContactChannel {
  /** Full, ready-to-use value (e.g. "+91 90000 00000", "you@example.com"). */
  value: string;
  /** Optional shorter label to display instead of the raw value. */
  display?: string;
}

export interface Education {
  college: string | null;
  branch: string | null;
  location: string | null;
  graduationYear: string | null;
}

export const profile = {
  name: 'Daksh Sinhghal',
  initials: 'DS',
  wordmark: 'DS.',
  role: 'B.Tech First-Year Student • AI & Creative Technology Builder',

  /** Rotating hero roles — approved list only. */
  roles: [
    'AI Prototype Builder',
    'Creative Developer',
    'Gesture Interface Explorer',
    'Student Innovator',
  ],

  badge: 'Open to learning & collaboration',

  intro:
    'I’m a first-year B.Tech student who enjoys turning ambitious ideas into interactive digital experiences. I build AI prototypes, browser-based tools, gesture and voice interfaces, simulations, and product websites. My work sits at the intersection of technology, design, and experimentation. I learn by building, testing, and improving real projects—and I’m always looking for the next meaningful challenge.',

  story:
    'I’m Daksh Sinhghal, a first-year B.Tech student with a strong interest in artificial intelligence, interactive technology, and creative problem-solving. I prefer learning through action: I take an idea, turn it into a prototype, test what works, and keep refining it. That approach has led me to explore AI-assisted products, computer-vision experiments, hand-gesture and voice interfaces, health-tech demonstrations, simulations, and digital brand experiences. Every build teaches me something new—not only about code and tools, but also about user experience, communication, teamwork, and persistence. My goal is to grow into a well-rounded technology builder who can combine engineering, design, and practical thinking to create useful, memorable products.',

  /** Asset paths. Presence is probed at runtime; missing assets degrade gracefully. */
  photo: '/daksh-profile.webp',
  resume: {
    href: '/daksh-sinhghal-resume.pdf',
    downloadAs: 'Daksh-Sinhghal-Resume.pdf',
  },

  education: {
    college: null,
    branch: null,
    location: null,
    graduationYear: null,
  } satisfies Education as Education,

  contact: {
    phone: null as ContactChannel | null,
    email: null as ContactChannel | null,
    linkedin: null as ContactChannel | null,
    instagram: null as ContactChannel | null,
    location: null as ContactChannel | null,
  },

  /**
   * Destination for the contact form. When null, the form falls back to a
   * prefilled mailto: draft (and says so plainly in the UI).
   *   e.g. 'https://formspree.io/f/xxxxxxx'
   */
  contactFormEndpoint: null as string | null,

  /** Canonical origin, used for SEO tags and sitemap generation. */
  siteUrl: 'https://portfoio-silk.vercel.app',

  seo: {
    title: 'Daksh Sinhghal — Student Innovator & Creative Developer',
    description:
      'First-year B.Tech student building AI prototypes, gesture and motion interfaces, browser-based tools, simulations and product websites.',
  },

  /** Verified interests only. Left empty until confirmed. */
  interests: [] as string[],
} as const;

/** True when a contact channel has a usable value. */
export const hasChannel = (c: ContactChannel | null): c is ContactChannel =>
  Boolean(c && c.value.trim());

/** True when any education field has been filled in. */
export const hasEducation = (e: Education): boolean =>
  Boolean(e.college || e.branch || e.location || e.graduationYear);
