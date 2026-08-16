import placeholderPhoto from "@/assets/placeholder-photo.jpg";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin?: string;
  github?: string;
  /** Set true for the large leadership feature card. */
  lead?: boolean;
}

/**
 * Team roster. Names are intentionally placeholders — replace each entry
 * with the real member details. Photos: drop files in src/assets and import.
 */
export const team: TeamMember[] = [
  {
    name: "[ADD TEAM MEMBER]",
    role: "President",
    bio: "Leads the club's direction, events calendar and department coordination.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
    github: "[ADD GITHUB LINK]",
    lead: true,
  },
  {
    name: "[ADD TEAM MEMBER]",
    role: "Vice President",
    bio: "Supports club operations and keeps every track moving.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },
  {
    name: "[ADD TEAM MEMBER]",
    role: "Technical Head",
    bio: "Owns technical sessions, contest problem sets and project mentoring.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
    github: "[ADD GITHUB LINK]",
  },
  {
    name: "[ADD TEAM MEMBER]",
    role: "Event Head",
    bio: "Plans and runs competitions, workshops and hackathons end to end.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },
  {
    name: "[ADD TEAM MEMBER]",
    role: "Design Head",
    bio: "Shapes the club's visual identity, posters and event branding.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },
  {
    name: "[ADD TEAM MEMBER]",
    role: "Social Media Head",
    bio: "Runs outreach, announcements and the club's online presence.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },
  {
    name: "[ADD TEAM MEMBER]",
    role: "Core Team",
    bio: "Supports sessions, logistics and community activities.",
    photo: placeholderPhoto,
  },
  {
    name: "[ADD TEAM MEMBER]",
    role: "Core Team",
    bio: "Supports sessions, logistics and community activities.",
    photo: placeholderPhoto,
  },
];

export const leadership = team.find((m) => m.lead) ?? team[0];

export interface Spotlight {
  name: string;
  achievement: string;
  story: string;
  photo: string;
  linkedin?: string;
  github?: string;
}

/** Student spotlight entries — add real, verified stories only. */
export const spotlights: Spotlight[] = [
  {
    name: "[ADD STUDENT NAME]",
    achievement: "[ADD ACHIEVEMENT]",
    story:
      "Placeholder spotlight. Replace with a short, verified story: what they built or won, and what it took.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },
  {
    name: "[ADD STUDENT NAME]",
    achievement: "[ADD ACHIEVEMENT]",
    story:
      "Placeholder spotlight. Replace with a short, verified story: what they built or won, and what it took.",
    photo: placeholderPhoto,
    github: "[ADD GITHUB LINK]",
  },
  {
    name: "[ADD STUDENT NAME]",
    achievement: "[ADD ACHIEVEMENT]",
    story:
      "Placeholder spotlight. Replace with a short, verified story: what they built or won, and what it took.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },
];
