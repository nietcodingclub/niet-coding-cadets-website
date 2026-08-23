import placeholderPhoto from "@/assets/placeholder-photo.jpg";
import battleOfBots from "@/assets/events/battle-of-bots.png";
import cyberSapiens from "@/assets/events/cyber-sapiens.png";
import algoArena from "@/assets/events/algo-arena.png";
import escapeRoom from "@/assets/events/escape-room.png";
import dominance from "@/assets/events/dominance.png";
import seguePoster from "@/assets/events/segue-3-0.png";

export type EventCategory =
  | "Coding"
  | "Hackathon"
  | "Workshop"
  | "Competition"
  | "Seminar"
  | "Community"
  | "Other";

export type EventStatus = "upcoming" | "live" | "completed";

export interface ClubEvent {
  slug: string;
  name: string;
  subtitle?: string;
  /** ISO date string, or "[ADD DATE]" when not confirmed yet. */
  date: string;
  displayDate: string;
  time: string;
  venue: string;
  category: EventCategory;
  status: EventStatus;
  summary: string;
  description: string;
  poster: string;
  /** Registration URL — keep the placeholder until a real link exists. */
  registerUrl: string;
  registrationDeadline: string;
  registrationOpen: boolean;
  rounds?: string[];
  rules?: string[];
  eligibility?: string[];
  prizes?: string[];
  winners?: { position: string; name: string }[];
  gallery?: string[];
  featured?: boolean;
}

/**
 * Club events. Add new events here — nothing else needs to change.
 * Unconfirmed details intentionally use [ADD ...] placeholders.
 */
export const events: ClubEvent[] = [
  {
  slug: "segue-3-0",
  name: "Segue 3.0",
  subtitle: "Sustainable Intelligence",
  /** Countdown targets Grand Finale start — 25 Sep 2026 at 9:00 AM IST (UTC+5:30 = 03:30 UTC) */
  date: "2026-09-25T03:30:00Z",
  displayDate: "25–26 Sep 2026",
  time: "Grand Finale — 25 & 26 Sep 2026",
  venue: "NIET, Greater Noida",
  category: "Hackathon",
  status: "live",
  summary:
    "A global design thinking challenge focused on solving real-world problems through innovation, collaboration and sustainable solutions.",
  description:
    "Segue 3.0 – Sustainable Intelligence is a Global Design Thinking Challenge presented by the School of Future Skills in collaboration with NIET, Greater Noida. Participants develop solutions to real-world problems through a structured design-thinking journey, connecting their ideas with the United Nations Sustainable Development Goals. The challenge includes team registration, proposal submission, shortlisting, online pitching and a grand finale at NIET for the Top 30 teams.",
  poster: seguePoster,
  registerUrl: "https://schooloffutureskills.com/segue-3-0-registration-form/",
  registrationDeadline: "Closed",
  registrationOpen: false,
  rounds: [
    "✅ Team Registration — Completed",
    "✅ Proposal Submission — Completed",
    "🔴 PPT / Presentation Round — Currently Ongoing",
    "⏳ Grand Finale — 25 & 26 Sep 2026 at NIET",
  ],
  rules: [
    "Teams register under a selected problem category.",
    "Teams submit a presentation/proposal during the submission stage.",
    "Shortlisted teams proceed to the pitching stage.",
    "The Grand Finale is conducted offline at NIET, Greater Noida.",
  ],
  eligibility: [
    "Students and professionals",
    "Teams of up to 6 members",
  ],
  prizes: [
    "₹4.5 Lakh Award Pool",
    "Awards across multiple categories",
    "Recognition and global visibility for top-performing teams",
  ],
  featured: true,
},
  {
    slug: "dominance",
    name: "Dominance",
    subtitle: "Crack. Claim. Conquer.",
    date: "2026-04-10",
    displayDate: "April 10, 2026",
    time: "9:00 AM – 3:00 PM",
    venue: "Lab 102D",
    category: "Competition",
    status: "completed",
    summary:
      "A competitive technical event focused on problem solving, logic and coding.",
    description:
      "Dominance was a technical competition organized in collaboration with Reboot Club. Participants competed through a series of challenges designed to test their technical knowledge, logic and problem-solving ability.",
    poster: dominance,
    registerUrl: "[ADD REGISTRATION LINK]",
    registrationDeadline: "Closed",
    registrationOpen: false,
  },

  {
    slug: "escape-room",
    name: "Escape Room",
    subtitle: "Not everyone escapes. Will you?",
    date: "2025-03-22",
    displayDate: "March 22, 2025",
    time: "[ADD TIME]",
    venue: "Plot-19, NIET, Greater Noida",
    category: "Competition",
    status: "completed",
    summary:
      "A challenge built around logic, teamwork and solving problems before time runs out.",
    description:
      "Escape Room challenged participants to think, solve and work together under pressure. The event was organized at NIET Greater Noida with a focus on problem solving and teamwork.",
    poster: escapeRoom,
    registerUrl: "[ADD REGISTRATION LINK]",
    registrationDeadline: "Closed",
    registrationOpen: false,
  },

  {
    slug: "algo-arena",
    name: "Algo Arena",
    subtitle: "Unleash Your Logic. Conquer the Arena!",
    date: "2025-01-01",
    displayDate: "TBA",
    time: "TBA",
    venue: "TBA",
    category: "Coding",
    status: "completed",
    summary:
      "A competitive programming event focused on logic, algorithms and problem solving.",
    description:
      "Algo Arena was organized by NIET Coding Club as a competitive coding challenge designed to test participants' algorithmic thinking, logical reasoning and programming skills.",
    poster: algoArena,
    registerUrl: "[ADD REGISTRATION LINK]",
    registrationDeadline: "Closed",
    registrationOpen: false,
  },

  {
    slug: "cyber-sapiens",
    name: "Cyber Sapiens",
    subtitle: "Think. Defend. Conquer.",
    date: "2025-01-01",
    displayDate: "TBA",
    time: "TBA",
    venue: "TBA",
    category: "Competition",
    status: "completed",
    summary:
      "A cybersecurity-focused technical challenge designed to test participants' knowledge and problem-solving skills.",
    description:
      "Cyber Sapiens was a cybersecurity-themed event presented by Prayartan, challenging participants to explore technical problems and demonstrate their cybersecurity knowledge.",
    poster: cyberSapiens,
    registerUrl: "[ADD REGISTRATION LINK]",
    registrationDeadline: "Closed",
    registrationOpen: false,
  },

  {
    slug: "battle-of-bots",
    name: "Battle of Bots",
    subtitle: "Game on tech: where gamers and techies collide.",
    date: "2025-01-01",
    displayDate: "TBA",
    time: "TBA",
    venue: "D Block",
    category: "Competition",
    status: "completed",
    summary:
      "A gaming and technology competition bringing together gamers and tech enthusiasts.",
    description:
      "Battle of Bots was organized by the Department of CSE in collaboration with Dodge Gaming, bringing together students interested in gaming, technology and competitive challenges.",
    poster: battleOfBots,
    registerUrl: "[ADD REGISTRATION LINK]",
    registrationDeadline: "Closed",
    registrationOpen: false,
  },
];
export const eventFilters = [
  "All",
  "Coding",
  "Workshop",
  "Competition",
  "Hackathon",
] as const;

export const featuredEvent = events.find((e) => e.featured) ?? events[0];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);

export const upcomingEvents = events.filter((e) => e.status !== "completed");
export const pastEvents = events.filter((e) => e.status === "completed");
