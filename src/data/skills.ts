/**
 * Skills registry.
 *
 * Ground rule: a skill is only published when it is evidenced by the project
 * archive itself. Each entry records WHY it is claimed via `evidence`, and
 * anything not yet verifiable sits in `unconfirmedSkills`, which the UI does
 * not render. `confidenceLabel` is deliberately null until Daksh sets it —
 * self-assessment is a personal fact, not something to infer.
 */
import { projects, type Project } from './projects';

export const SKILL_GROUPS = [
  'AI & Prototyping',
  'Computer Vision & Interaction',
  'Web Development',
  'Design & Product Thinking',
  'Tools & Platforms',
  'Professional Skills',
] as const;

export type SkillGroupName = (typeof SKILL_GROUPS)[number];

export type ConfidenceLabel = 'Learning' | 'Working knowledge' | 'Comfortable' | 'Strong';

export interface Skill {
  name: string;
  category: SkillGroupName;
  /** Short glyph used as a lightweight icon. */
  icon: string;
  /** Null until self-assessed; the UI hides the chip while it is null. */
  confidenceLabel: ConfidenceLabel | null;
  description: string;
  /** Why this is claimed — shown as an aside, which keeps the page honest. */
  evidence: string;
  /** Matches a project's derived tech tag. */
  matchTech?: string;
  /** Matches a project's archive category. */
  matchCategory?: string;
}

const olderVersionCount = projects.filter((p) => p.isOlderVersion).length;
const vercelCount = projects.filter((p) => p.liveUrl?.includes('vercel.app')).length;
const categoryCount = new Set(projects.map((p) => p.category)).size;

export const skills: Skill[] = [
  // ---- AI & Prototyping -------------------------------------------------
  {
    name: 'AI-assisted product prototyping',
    category: 'AI & Prototyping',
    icon: '✦',
    confidenceLabel: null,
    description:
      'Taking an AI product idea from concept to a working, demonstrable browser prototype.',
    evidence: 'Obliq AI command cores, health-scan demos and AI workshop builds in the archive.',
    matchCategory: 'Obliq AI',
  },
  {
    name: 'Health-tech demonstrations',
    category: 'AI & Prototyping',
    icon: '⌁',
    confidenceLabel: null,
    description:
      'Scan-style interfaces that capture input, analyse it and present a readable report.',
    evidence: 'The Health Scan category, including eye, posture and face scan builds.',
    matchCategory: 'Health Scan',
  },
  {
    name: 'Rapid iteration',
    category: 'AI & Prototyping',
    icon: '↻',
    confidenceLabel: null,
    description: 'Shipping many versions of the same idea and keeping what measurably works.',
    evidence: `${olderVersionCount} superseded builds are retained across the archive.`,
  },

  // ---- Computer Vision & Interaction ------------------------------------
  {
    name: 'MediaPipe',
    category: 'Computer Vision & Interaction',
    icon: '◉',
    confidenceLabel: null,
    description: 'Face and pose landmark tracking driving live interface behaviour.',
    evidence: 'Archive note: "MediaPipe face + pose tracking, PDF reports".',
    matchTech: 'MediaPipe',
  },
  {
    name: 'Hand-gesture interfaces',
    category: 'Computer Vision & Interaction',
    icon: '✋',
    confidenceLabel: null,
    description: 'Camera-driven controls where hand position and motion replace pointer input.',
    evidence: 'The Gesture & Motion category is the largest body of work in the archive.',
    matchCategory: 'Gesture & Motion',
  },
  {
    name: 'Anatomy & 3D visualisation',
    category: 'Computer Vision & Interaction',
    icon: '⬡',
    confidenceLabel: null,
    description: 'Interactive anatomical models explored through gesture and hologram-style views.',
    evidence: 'The Anatomix category, including the ANATOMIX V2 gesture atlas.',
    matchCategory: 'Anatomix',
  },

  // ---- Web Development ---------------------------------------------------
  {
    name: 'React',
    category: 'Web Development',
    icon: '⚛',
    confidenceLabel: null,
    description: 'Component-driven application UIs, including multi-screen dashboards.',
    evidence: 'Archive notes marking builds as "React app build" and "Vite + React prototype".',
    matchTech: 'React',
  },
  {
    name: 'Vite',
    category: 'Web Development',
    icon: '⚡',
    confidenceLabel: null,
    description: 'Building and bundling production front-ends.',
    evidence: 'Archive notes marking "Vite production build".',
    matchTech: 'Vite',
  },
  {
    name: 'Next.js',
    category: 'Web Development',
    icon: '▲',
    confidenceLabel: null,
    description: 'App-router projects taken as far as build output.',
    evidence: 'Archive notes: "Next.js app — needs build", "Next.js build output".',
    matchTech: 'Next.js',
  },
  {
    name: 'Three.js & React Three Fiber',
    category: 'Web Development',
    icon: '◈',
    confidenceLabel: null,
    description: 'Real-time 3D and shader work rendered in the browser.',
    evidence: 'Archive notes: "React Three Fiber — needs build", "Vite + R3F — source only".',
    matchTech: 'Three.js',
  },

  // ---- Design & Product Thinking ----------------------------------------
  {
    name: 'Brand & product sites',
    category: 'Design & Product Thinking',
    icon: '◐',
    confidenceLabel: null,
    description: 'End-to-end marketing and commerce experiences with a considered visual language.',
    evidence: 'The Brand & Commerce category, including Marque and PORTFOLIO.space.',
    matchCategory: 'Brand & Commerce',
  },
  {
    name: 'Motion & scroll storytelling',
    category: 'Design & Product Thinking',
    icon: '⤳',
    confidenceLabel: null,
    description: 'Sequencing narrative through scroll position and choreographed transitions.',
    evidence: 'Archive note: "Scroll-driven film sequence" on the Marque build.',
  },
  {
    name: 'Specification writing',
    category: 'Design & Product Thinking',
    icon: '❐',
    confidenceLabel: null,
    description: 'Documenting requirements alongside the build, not after it.',
    evidence: 'The WedIn Udaipur SRS & Project Report published in the archive.',
  },

  // ---- Tools & Platforms -------------------------------------------------
  {
    name: 'Vercel',
    category: 'Tools & Platforms',
    icon: '⬢',
    confidenceLabel: null,
    description: 'Deploying and hosting live front-end applications.',
    evidence: `${vercelCount} archive projects are deployed on Vercel.`,
    matchTech: 'Vercel',
  },
  {
    name: 'Firebase',
    category: 'Tools & Platforms',
    icon: '◆',
    confidenceLabel: null,
    description: 'Backend services for an application prototype.',
    evidence: 'Archive note: "Flutter + Firebase mobile app".',
    matchTech: 'Firebase',
  },
  {
    name: 'Flutter',
    category: 'Tools & Platforms',
    icon: '❖',
    confidenceLabel: null,
    description: 'Cross-platform mobile application development.',
    evidence: 'Archive note: "Flutter + Firebase mobile app".',
    matchTech: 'Flutter',
  },

  // ---- Professional Skills ----------------------------------------------
  {
    name: 'Shipping consistently',
    category: 'Professional Skills',
    icon: '◎',
    confidenceLabel: null,
    description: 'Maintaining momentum across a large, long-running body of work.',
    evidence: `${projects.length} archived builds across ${categoryCount} categories.`,
  },
  {
    name: 'Self-directed learning',
    category: 'Professional Skills',
    icon: '◇',
    confidenceLabel: null,
    description: 'Picking up unfamiliar frameworks by building something real with them.',
    evidence: 'The archive spans React, Next.js, R3F, Flutter and MediaPipe.',
  },
];

/**
 * Tools suggested by the themes of the archive but NOT verifiable from its
 * records. Not rendered anywhere; move an entry into `skills` once confirmed.
 */
export const unconfirmedSkills = ['Lovable', 'GitHub', 'Figma', 'TypeScript', 'Tailwind CSS'];

/**
 * Currently-learning panel. Empty until confirmed — the Skills page shows a
 * neutral empty state rather than inventing items.
 */
export const currentlyLearning: string[] = [];

/** Projects that evidence a given skill, newest first, capped for display. */
export function relatedProjects(skill: Skill, limit = 3): Project[] {
  return projects
    .filter((p) => !p.isOlderVersion)
    .filter(
      (p) =>
        (skill.matchTech && p.tech.includes(skill.matchTech)) ||
        (skill.matchCategory && p.category === skill.matchCategory)
    )
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
    .slice(0, limit);
}

export const skillsByGroup = (): { group: SkillGroupName; items: Skill[] }[] =>
  SKILL_GROUPS.map((group) => ({
    group,
    items: skills.filter((s) => s.category === group),
  })).filter((g) => g.items.length > 0);
