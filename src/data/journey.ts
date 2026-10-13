/**
 * Journey timeline for the About page.
 *
 * Entries here describe *how the work has progressed*, which is evidenced by
 * the project archive itself. Nothing personal (dates of admission, awards,
 * institutions) is asserted — those belong in profile.ts / achievements.ts once
 * confirmed.
 */

export interface JourneyEntry {
  id: string;
  title: string;
  /** Short period label, e.g. "Mid 2026". Kept vague where evidence is thin. */
  period: string;
  description: string;
  /** Project ids from projects.ts that evidence this stage, if any. */
  relatedProjectIds?: string[];
}

export const journey: JourneyEntry[] = [
  {
    id: 'brand-web',
    title: 'Building for the browser',
    period: 'Early archive',
    description:
      'Started by shipping brand and product sites end to end — scroll-driven storytelling, shader lookbooks and marketplace concepts — learning layout, motion and performance in the browser.',
  },
  {
    id: 'gesture',
    title: 'Gesture & motion interfaces',
    period: 'Mid archive',
    description:
      'Moved into camera-driven interaction: hand tracking, pose detection and motion FX, iterating through many builds to find what actually feels responsive to a user.',
  },
  {
    id: 'health-ai',
    title: 'AI & health-tech prototypes',
    period: 'Recent archive',
    description:
      'Combined computer vision with AI-assisted products — face, eye and posture scanning demos with generated reports — and anatomy visualisation tools.',
  },
  {
    id: 'platforms',
    title: 'Toward complete products',
    period: 'Latest builds',
    description:
      'Consolidated the experiments into fuller products: command-core dashboards, a wedding-planning platform with written specification, and deployed live applications.',
  },
];
