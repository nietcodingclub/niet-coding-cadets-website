export interface Achievement {
  title: string;
  year: string;
  category: string;
  description: string;
  result: string;
  /** Team / member names — keep the placeholder until confirmed. */
  members: string;
  /** Certificate or photo path, if available. */
  image?: string;
  link?: string;
  highlight?: boolean;
}

/** Add new achievements here. Never fabricate results. */
export const achievements: Achievement[] = [
  {
    title: "Smart India Hackathon",
    year: "[ADD YEAR]",
    category: "National Hackathon",
    result: "Selected among the Top 30 Teams",
    description:
      "Cadets built and pitched a solution to a real problem statement at India's largest open innovation initiative, finishing among the Top 30 teams.",
    members: "[ADD TEAM MEMBER NAMES]",
    highlight: true,
  },
  {
    title: "[ADD ACHIEVEMENT]",
    year: "[ADD YEAR]",
    category: "[ADD CATEGORY]",
    result: "[ADD RESULT]",
    description:
      "Placeholder card — replace with a confirmed club or member achievement from src/data/achievements.ts.",
    members: "[ADD TEAM MEMBER NAMES]",
  },
  {
    title: "[ADD ACHIEVEMENT]",
    year: "[ADD YEAR]",
    category: "[ADD CATEGORY]",
    result: "[ADD RESULT]",
    description:
      "Placeholder card — replace with a confirmed club or member achievement from src/data/achievements.ts.",
    members: "[ADD TEAM MEMBER NAMES]",
  },
];

export interface TimelineEntry {
  year: string;
  title: string;
  points: string[];
}

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    title: "Major Club Activities",
    points: [
      "Community sessions and peer learning began at scale",
      "[ADD CONFIRMED MILESTONE]",
    ],
  },
  {
    year: "2025",
    title: "Competitions \u2022 Events \u2022 Workshops",
    points: [
      "Smart India Hackathon participation \u2014 Top 30 teams",
      "Workshops and contests across the CSE department",
      "[ADD CONFIRMED MILESTONE]",
    ],
  },
  {
    year: "2026",
    title: "New Milestones",
    points: ["Algo Arena and the next season of events", "[ADD UPCOMING MILESTONE]"],
  },
];
