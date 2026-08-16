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
    title: "Building a Strong Coding Community",
    year: "2024–2026",
    category: "Community Impact",
    result: "150+ Students Mentored",
    description:
      "NIET Coding Cadets has grown into an active technical community focused on peer learning, coding, problem solving, technical events and collaborative growth.",
    members: "NIET Coding Cadets Community",
    highlight: true,
  },
  {
    title: "Technical Events & Competitions",
    year: "2024–2026",
    category: "Events & Competitions",
    result: "Multiple Technical Events",
    description:
      "The club has conducted coding competitions, technical challenges and student-focused activities that encourage practical learning and healthy competition.",
    members: "NIET Coding Cadets",
  },
  {
    title: "Student-Led Technical Initiatives",
    year: "2024–2026",
    category: "Leadership",
    result: "Student-Driven Community",
    description:
      "Cadets take responsibility for organizing activities, coordinating events, supporting peers and creating opportunities for students to explore technology beyond the classroom.",
    members: "NIET Coding Cadets Core Team",
  },
];
export interface TimelineEntry {
  year: string;
  title: string;
  points: string[];
}

export const timeline: TimelineEntry[] = [
  {
    year: "2021",
    title: "Club Founded",
    points: [
      "NIET Coding Cadets was established as a student-led technical community.",
      "The club was founded to encourage coding, technology, problem solving and peer learning.",
    ],
  },
  {
    year: "2024",
    title: "Technical Events & Competitions",
    points: [
      "Cyber Sapiens — cybersecurity-focused technical challenge",
      "Battle of Bots — gaming and technology competition",
      "Technical activities and student engagement across the CSE community",
    ],
  },
  {
    year: "2025",
    title: "Competitions • Events • Workshops",
    points: [
      "Escape Room — logic, teamwork and problem-solving challenge",
      "Algo Arena — competitive coding and algorithmic problem solving",
    ],
  },
  {
    year: "2026",
    title: "Expanding the Community",
    points: [
      "Dominance — technical competition focused on logic and problem solving",
      "Segue 3.0 — Sustainable Intelligence global design thinking challenge",
      "Continued coding activities, competitions and technical initiatives",
    ],
  },
];
