import placeholderPhoto from "@/assets/placeholder-photo.jpg";
import presidentPhoto from "@/assets/team/p.jpeg";
import meghnaPhoto from "@/assets/team/vp1.jpg";
import mayankPhoto from "@/assets/team/vp2.png";
import shashvatPhoto from "@/assets/team/vp3.jpeg";
import rupeshPhoto from "@/assets/team/vp4.jpeg";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin?: string;
  github?: string;
  /** Marks the current president for the LeadershipFeature hero card. */
  lead?: boolean;
  /** Marks a former/alumni leadership role. */
  former?: boolean;
}

export const team: TeamMember[] = [
  {
    name: "Mayank Singh",
    role: "President",
    bio: "Drives strategic leadership and technical vision for NIET Coding Cadets, empowering students through innovative hackathons, peer mentorship, and collaborative coding initiatives.",
    photo: mayankPhoto,
    linkedin: "https://www.linkedin.com/in/mayank-singh-niet/",
  },

  {
    name: "Shashvat Tripathi",
    role: "Vice President",
    bio: "Supports club operations, drives student initiatives and coordinates key activities.",
    photo: shashvatPhoto,
    linkedin: "https://www.linkedin.com/in/shashvat-tripathi-6518aa332/",
  },

  {
    name: "Rupesh Yadav",
    role: "Vice President",
    bio: "Supports club operations, drives student initiatives and coordinates key activities.",
    photo: rupeshPhoto,
    linkedin: "https://www.linkedin.com/in/rupesh-yadav-7b0123274/",
  },

  {
    name: "Tanmay Awasthi",
    role: "Former President and Leader",
    bio: "Leads NIET Coding Cadets, shaping the club's direction, initiatives, events and student community.",
    photo: presidentPhoto,
    linkedin: "https://www.linkedin.com/in/tanmay-awasthi-programmer4/",
    github: "https://github.com/Tanmay0405",
    lead: true,
    former: true,
  },

  {
    name: "Meghna Mishra",
    role: "Former Vice President",
    bio: "Co-led early club operations, student programs and community initiatives.",
    photo: meghnaPhoto,
    linkedin: "https://www.linkedin.com/in/meghna-mishra-9b4b03297/",
    former: true,
  },

  {
    name: "Rundransh Chandel",
    role: "Technical Head",
    bio: "Leads technical sessions, coding activities, projects and technical initiatives.",
    photo: placeholderPhoto,
    linkedin: "https://www.linkedin.com/in/rudransh-chandel/",
    // github: "[ADD GITHUB LINK]",
  },

  // ── DRAFT entries — fill real names before publishing ───────────────────
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

/** Current president (used in the LeadershipFeature hero card). */
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
    achievement: "Former Vice President",
    story:
      "Co-led NIET Coding Cadets through its early growth phase, helping establish the club's operational foundation. Played a key role in mentoring junior members and driving community-building initiatives across the department.",
    photo: meghnaPhoto,
    linkedin: "https://www.linkedin.com/in/meghna-mishra-9b4b03297/",
  },
  {
    name: "Mayank Singh",
    achievement: "Club President",
    story:
      "Currently leading NIET Coding Cadets as President, driving strategic initiatives including hackathons, technical workshops and peer mentorship programs. Focused on building a culture of collaborative learning and innovation within the CSE department.",
    photo: mayankPhoto,
    linkedin: "https://www.linkedin.com/in/mayank-singh-niet/",
  },
  {
    name: "Shashvat Tripathi",
    achievement: "Vice President",
    story:
      "As Vice President, Shashvat coordinates between team members and leadership, ensuring seamless execution of club events, workshops and outreach programmes at NIET Coding Cadets.",
    photo: shashvatPhoto,
    linkedin: "https://www.linkedin.com/in/shashvat-tripathi-6518aa332/",
  },
  {
    name: "Rupesh Yadav",
    achievement: "Vice President",
    story:
      "Rupesh drives student engagement as Vice President, playing a pivotal role in planning events, mentoring members and fostering a vibrant coding culture within NIET Coding Cadets.",
    photo: rupeshPhoto,
    linkedin: "https://www.linkedin.com/in/rupesh-yadav-7b0123274/",
  },
  {
    name: "Rundransh Chandel",
    achievement: "Technical Head",
    story:
      "Heads the technical arm of NIET Coding Cadets — organizing coding sessions, project collaborations and competitive programming events. Passionate about making complex technical concepts accessible and engaging for every club member.",
    photo: placeholderPhoto,
    linkedin: "https://www.linkedin.com/in/rudransh-chandel/",
  },
];

