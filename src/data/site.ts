/**
 * Central club configuration.
 * Update everything about the club from this single file.
 * Values wrapped in [ ] are placeholders that must be replaced with real info.
 */

export const site = {
  name: "NIET Coding Cadets",
  shortName: "Coding Cadets",
  department: "Computer Science & Engineering",
  institution: "Noida Institute of Engineering and Technology (NIET)",
  location: "Greater Noida, Uttar Pradesh, India",
  tagline: "Ctrl + C(ode) | Ctrl + V(ictory)",
  description:
    "NIET Coding Cadets is the CSE technical community at NIET, bringing together students passionate about coding, technology, problem-solving and innovation.",
  /** Replace with the real registration / membership form URL. */
  joinUrl: "[ADD REGISTRATION LINK]",
  contactEmail: "nietcodingclub@gmail.com",
} as const;

/** Social links — replace placeholders with the official handles/URLs. */
export const socials = {
  instagram: {
    label: "Instagram",
    handle: "@niet.coding.cadets",
    url: "https://www.instagram.com/niet.coding.cadets/",
  },

  linkedin: {
    label: "LinkedIn",
    handle: "NIET Coding Cadets",
    url: "https://www.linkedin.com/company/niet-coding-cadets/",
  },

  github: {
    label: "GitHub",
    handle: "@nietcodingclub",
    url: "https://github.com/nietcodingclub",
  },

  whatsapp: {
    label: "WhatsApp Community",
    handle: "Join our community",
    url: "https://chat.whatsapp.com/JXgxzkt91VzLogg9cn0TeP",
  },

  whatsappUpdates: {
    label: "Event Updates",
    handle: "Get event updates",
    url: "https://chat.whatsapp.com/Fj0TR8aVGNMGFWctJ4q2d2?s=cl&p=a&ilr=0",
  },

  whatsappDiscussion: {
    label: "Problem Discussion",
    handle: "Discuss coding problems",
    url: "https://chat.whatsapp.com/D0qf5eCSvVRBQRaNr2kNgZ?s=cl&p=a&ilr=0",
  },
} as const;

export type Social = (typeof socials)[keyof typeof socials];

/** Is this a real link or an unfilled placeholder? */
export const isPlaceholder = (value: string) =>
  !value || value.trim().startsWith("[");

/**
 * Club statistics. Keep unconfirmed numbers as qualitative or placeholder
 * values — never invent figures for an official club page.
 */
export const stats: {
  value: string;
  /** Numeric target for the count-up animation; omit for non-numeric values. */
  target?: number;
  suffix?: string;
  label: string;
  note?: string;
}[] = [
    { value: "150+", target: 150, suffix: "+", label: "Students Mentored", note: "Peer learning sessions" },
    { value: "XX+", label: "Events & Activities", note: "[ADD CONFIRMED COUNT]" },
    { value: "Top 30", label: "Smart India Hackathon", note: "Selected among the Top 30 teams" },
    { value: "\u221E", label: "Ideas & Possibilities", note: "Always shipping" },
  ];

/** The Learn -> Grow journey shown in the About section. */
export const journey = [
  { step: "Learn", text: "Explore languages, tools and fundamentals beyond the syllabus." },
  { step: "Build", text: "Ship real projects with peers who care about the craft." },
  { step: "Compete", text: "Enter contests, hackathons and coding duels." },
  { step: "Lead", text: "Own an event, mentor juniors, run a track." },
  { step: "Grow", text: "Leave with a portfolio, a network and confidence." },
];

export const whyJoin = [
  { title: "Learn", text: "Explore technologies beyond the classroom.", icon: "BookOpen" },
  { title: "Build", text: "Turn ideas into real projects.", icon: "Hammer" },
  { title: "Compete", text: "Challenge yourself through coding contests and competitions.", icon: "Trophy" },
  { title: "Connect", text: "Meet students who share your interests.", icon: "Users" },
  { title: "Lead", text: "Take responsibility and develop leadership skills.", icon: "Flag" },
  { title: "Grow", text: "Build technical and professional confidence.", icon: "TrendingUp" },
] as const;

/** Tech poll shown in the engagement section. */
export const techPoll = {
  question: "Which technology should we explore next?",
  options: ["AI / ML", "Web Development", "Cybersecurity", "Cloud"],
};
