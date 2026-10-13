/**
 * Achievements registry.
 *
 * Built to scale to 40+ real records with filtering and pagination. It ships
 * EMPTY on purpose: no achievement is invented. Add verified records to the
 * `achievements` array and the About page's filters, featured row, pagination
 * and detail dialog all light up automatically.
 */

export const ACHIEVEMENT_CATEGORIES = [
  'Awards',
  'Hackathons',
  'Certifications',
  'Competitions',
  'Academic',
  'Leadership',
  'Community',
  'Other',
] as const;

export type AchievementCategory = (typeof ACHIEVEMENT_CATEGORIES)[number];

export interface Achievement {
  id: string;
  title: string;
  issuerOrEvent: string;
  /** ISO date (YYYY-MM-DD) or year (YYYY). Drives the year filter and sorting. */
  date: string;
  category: AchievementCategory;
  description: string;
  /** Link to a certificate/proof. Omit when none exists. */
  certificateUrl?: string;
  /** Image or thumbnail path. Omit when none exists. */
  image?: string;
  featured?: boolean;
}

/**
 * Add real records here. Example shape (keep commented until verified):
 *
 * {
 *   id: 'sih-2026',
 *   title: 'Smart India Hackathon 2026 — Finalist',
 *   issuerOrEvent: 'Ministry of Education, Government of India',
 *   date: '2026-03-15',
 *   category: 'Hackathons',
 *   description: 'One-line summary of what was built and the result.',
 *   certificateUrl: '/certificates/sih-2026.pdf',
 *   featured: true,
 * },
 */
export const achievements: Achievement[] = [];

export const featuredAchievements = (): Achievement[] =>
  achievements.filter((a) => a.featured).slice(0, 6);

/** Distinct years present in the data, newest first. */
export const achievementYears = (): string[] =>
  [...new Set(achievements.map((a) => a.date.slice(0, 4)))].sort((a, b) => b.localeCompare(a));

/** Only the categories that actually have records, in canonical order. */
export const usedAchievementCategories = (): AchievementCategory[] =>
  ACHIEVEMENT_CATEGORIES.filter((c) => achievements.some((a) => a.category === c));
