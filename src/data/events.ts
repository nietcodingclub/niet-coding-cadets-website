import placeholderPhoto from "@/assets/placeholder-photo.jpg";

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
    slug: "algo-arena",
    name: "Algo Arena",
    subtitle: "Where logic meets speed.",
    date: "[ADD DATE]",
    displayDate: "[ADD DATE]",
    time: "[ADD TIME]",
    venue: "[ADD VENUE]",
    category: "Competition",
    status: "upcoming",
    summary:
      "A multi-round battle of logic, speed and precision for coders across every year of CSE.",
    description:
      "Algo Arena is the flagship competitive programming event of NIET Coding Cadets. Teams and solo cadets move through a rapid quiz round, a timed speed challenge and a head-to-head coding duel. Bring your fundamentals, your favourite language and your nerves.",
    poster: placeholderPhoto,
    registerUrl: "[ADD REGISTRATION LINK]",
    registrationDeadline: "[ADD DEADLINE]",
    registrationOpen: true,
    rounds: ["Quiz Round", "Speed Challenge", "Coding Duel"],
    rules: [
      "Any programming language allowed unless a round states otherwise.",
      "Plagiarism or external help results in immediate disqualification.",
      "Decisions of the judging panel are final.",
      "[ADD ADDITIONAL RULES]",
    ],
    eligibility: ["Open to all NIET students", "[ADD YEAR/BRANCH RESTRICTIONS IF ANY]"],
    prizes: ["Prizes for top performers", "Certificates for all qualifiers", "[ADD PRIZE DETAILS]"],
    featured: true,
  },
  {
    slug: "dsa-bootcamp",
    name: "DSA Bootcamp",
    subtitle: "Fundamentals, properly.",
    date: "[ADD DATE]",
    displayDate: "[ADD DATE]",
    time: "[ADD TIME]",
    venue: "[ADD VENUE]",
    category: "Workshop",
    status: "upcoming",
    summary:
      "A hands-on session series on arrays, strings, recursion and complexity analysis, led by senior cadets.",
    description:
      "A practical bootcamp for students starting out with data structures and algorithms. Every session pairs a short concept walkthrough with live problem solving, so you leave having actually written code.",
    poster: placeholderPhoto,
    registerUrl: "[ADD REGISTRATION LINK]",
    registrationDeadline: "[ADD DEADLINE]",
    registrationOpen: true,
    eligibility: ["Open to all NIET students", "No prior experience required"],
  },
  {
    slug: "smart-india-hackathon-participation",
    name: "Smart India Hackathon",
    subtitle: "National-level problem solving.",
    date: "[ADD DATE]",
    displayDate: "[ADD YEAR]",
    time: "[ADD TIME]",
    venue: "[ADD VENUE]",
    category: "Hackathon",
    status: "completed",
    summary:
      "Cadets represented NIET at the Smart India Hackathon and were selected among the Top 30 teams.",
    description:
      "Smart India Hackathon is a nationwide initiative where student teams solve real problem statements submitted by ministries, departments and industry. A team from the Coding Cadets community was selected among the Top 30 teams.",
    poster: placeholderPhoto,
    registerUrl: "[ADD REGISTRATION LINK]",
    registrationDeadline: "Closed",
    registrationOpen: false,
    winners: [{ position: "Top 30 Teams", name: "[ADD TEAM MEMBER NAMES]" }],
    gallery: [placeholderPhoto, placeholderPhoto],
  },
  {
    slug: "code-jam",
    name: "Code Jam",
    subtitle: "One problem set. Sixty minutes.",
    date: "[ADD DATE]",
    displayDate: "[ADD DATE]",
    time: "[ADD TIME]",
    venue: "[ADD VENUE]",
    category: "Coding",
    status: "completed",
    summary: "A timed sprint of algorithmic problems with a live leaderboard.",
    description:
      "Code Jam is a short-format contest built around a curated problem set. Cadets solve against the clock while a live leaderboard tracks every submission.",
    poster: placeholderPhoto,
    registerUrl: "[ADD REGISTRATION LINK]",
    registrationDeadline: "Closed",
    registrationOpen: false,
    winners: [{ position: "Winners", name: "[ADD WINNER NAMES]" }],
  },
  {
    slug: "tech-talk-series",
    name: "Tech Talk Series",
    subtitle: "Ideas worth discussing.",
    date: "[ADD DATE]",
    displayDate: "[ADD DATE]",
    time: "[ADD TIME]",
    venue: "[ADD VENUE]",
    category: "Seminar",
    status: "completed",
    summary:
      "Open sessions where students and invited speakers break down a technology, a project or a career path.",
    description:
      "The Tech Talk Series is an informal seminar format: one topic, one speaker, plenty of questions. Past themes span web development, AI, open source and interview preparation.",
    poster: placeholderPhoto,
    registerUrl: "[ADD REGISTRATION LINK]",
    registrationDeadline: "Closed",
    registrationOpen: false,
  },
  {
    slug: "cadet-connect",
    name: "Cadet Connect",
    subtitle: "Meet the community.",
    date: "[ADD DATE]",
    displayDate: "[ADD DATE]",
    time: "[ADD TIME]",
    venue: "[ADD VENUE]",
    category: "Community",
    status: "completed",
    summary: "An onboarding meetup for new members: teams, tracks and what happens next.",
    description:
      "Cadet Connect is how new members find their footing — an introduction to the club's tracks, its people and the projects currently in flight.",
    poster: placeholderPhoto,
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
