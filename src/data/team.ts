import placeholderPhoto from "@/assets/placeholder-photo.jpg";
import presidentPhoto from "@/assets/team/p.jpeg";
import meghnaPhoto from "@/assets/team/vp1.jpg";
import mayankPhoto from "@/assets/team/vp2.png";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin?: string;
  github?: string;
  lead?: boolean;
}

export const team: TeamMember[] = [
  {
    name: "Tanmay Awasthi",
    role: "President",
    bio: "Leads NIET Coding Cadets, shaping the club's direction, initiatives, events and student community.",
    photo: presidentPhoto,
    linkedin: "https://www.linkedin.com/in/tanmay-awasthi-programmer4/",
    github: "https://github.com/Tanmay0405",
    lead: true,
  },

  {
    name: "Meghna Mishra",
    role: "Vice President",
    bio: "Supports club operations, initiatives and student activities.",
    photo: meghnaPhoto,
    linkedin: "https://www.linkedin.com/in/meghna-mishra-9b4b03297/",
  },

  {
    name: "Mayank Singh",
    role: "Vice President",
    bio: "Supports club operations, initiatives and student activities.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },

  {
    name: "Rundransh Chandel",
    role: "Technical Head",
    bio: "Leads technical sessions, coding activities, projects and technical initiatives.",
    photo: placeholderPhoto,
    linkedin: "https://www.linkedin.com/in/rudransh-chandel/",
    github: "[ADD GITHUB LINK]",
  },

  {
    name: "[ADD NAME]",
    role: "Event Head",
    bio: "Plans and coordinates competitions, workshops, hackathons and club events.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },

  {
    name: "[ADD NAME]",
    role: "Design Head",
    bio: "Handles the club's visual identity, posters, creatives and event branding.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },

  {
    name: "[ADD NAME]",
    role: "Social Media Head",
    bio: "Manages social media, announcements, outreach and digital presence.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },

  {
    name: "[ADD NAME]",
    role: "Coordinator",
    bio: "Supports club sessions, events, coordination and community activities.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },

  {
    name: "[ADD NAME]",
    role: "Coordinator",
    bio: "Supports club sessions, events, coordination and community activities.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },

  {
    name: "[ADD NAME]",
    role: "Coordinator",
    bio: "Supports club sessions, events, coordination and community activities.",
    photo: placeholderPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
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

export const spotlights: Spotlight[] = [
  {
    name: "Meghna Mishra",
    achievement: "[ADD ACHIEVEMENT]",
    story:
      "Add a short, verified story about what the student built, achieved or contributed.",
    photo: meghnaPhoto,
    linkedin:"https://www.linkedin.com/in/meghna-mishra-9b4b03297/",
  },
  {
    name: "Mayank Singh",
    achievement: "[ADD ACHIEVEMENT]",
    story:
      "Add a short, verified story about what the student built, achieved or contributed.",
    photo: mayankPhoto,
    linkedin: "[ADD LINKEDIN LINK]",
  },
  {
    name: "Rundransh Chandel",
    achievement: "[ADD ACHIEVEMENT]",
    story:
      "Add a short, verified story about what the student built, achieved or contributed.",
    photo: placeholderPhoto,
    linkedin: "https://www.linkedin.com/in/rudransh-chandel/",
  },
];
