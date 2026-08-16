export interface ResourceTrack {
  title: string;
  blurb: string;
  icon: string;
  /** Skills this track maps to in the Skill Explorer. */
  interests: string[];
  links: { label: string; url: string }[];
}

/** Learning tracks. Replace [ADD ...] links with club-curated resources. */
export const resources: ResourceTrack[] = [
  {
    title: "DSA",
    blurb: "Arrays, strings, recursion, trees, graphs and complexity analysis.",
    icon: "Binary",
    interests: ["DSA"],
    links: [
      { label: "Practice: LeetCode", url: "https://leetcode.com/" },
      { label: "Practice: GeeksforGeeks DSA", url: "https://www.geeksforgeeks.org/data-structures/" },
      { label: "Club notes", url: "[ADD CLUB NOTES LINK]" },
    ],
  },
  {
    title: "Java",
    blurb: "OOP fundamentals, collections and building real applications.",
    icon: "Coffee",
    interests: ["Java"],
    links: [
      { label: "Docs: Java Tutorials", url: "https://dev.java/learn/" },
      { label: "Practice: HackerRank Java", url: "https://www.hackerrank.com/domains/java" },
      { label: "Club notes", url: "[ADD CLUB NOTES LINK]" },
    ],
  },
  {
    title: "JavaScript",
    blurb: "The language of the web: from syntax to async and modules.",
    icon: "Braces",
    interests: ["Web Development"],
    links: [
      { label: "Docs: MDN JavaScript", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
      { label: "Guide: javascript.info", url: "https://javascript.info/" },
      { label: "Club notes", url: "[ADD CLUB NOTES LINK]" },
    ],
  },
  {
    title: "Web Development",
    blurb: "HTML, CSS, React and shipping something people can actually open.",
    icon: "Globe",
    interests: ["Web Development"],
    links: [
      { label: "Curriculum: The Odin Project", url: "https://www.theodinproject.com/" },
      { label: "Docs: React", url: "https://react.dev/learn" },
      { label: "Club notes", url: "[ADD CLUB NOTES LINK]" },
    ],
  },
  {
    title: "SQL",
    blurb: "Queries, joins, indexes and thinking in relations.",
    icon: "Database",
    interests: ["DSA", "Web Development"],
    links: [
      { label: "Practice: SQLBolt", url: "https://sqlbolt.com/" },
      { label: "Practice: LeetCode SQL", url: "https://leetcode.com/studyplan/top-sql-50/" },
      { label: "Club notes", url: "[ADD CLUB NOTES LINK]" },
    ],
  },
  {
    title: "Git & GitHub",
    blurb: "Branches, pull requests and collaborating without breaking things.",
    icon: "GitBranch",
    interests: ["Web Development", "Java", "Python"],
    links: [
      { label: "Docs: GitHub Skills", url: "https://skills.github.com/" },
      { label: "Guide: Pro Git book", url: "https://git-scm.com/book/en/v2" },
      { label: "Club notes", url: "[ADD CLUB NOTES LINK]" },
    ],
  },
  {
    title: "Interview Preparation",
    blurb: "Core CS revision, mock rounds and resume review with seniors.",
    icon: "Briefcase",
    interests: ["DSA", "Java", "Python"],
    links: [
      { label: "Roadmap: developer roadmaps", url: "https://roadmap.sh/" },
      { label: "Practice: Striver A2Z sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
      { label: "Club mock rounds", url: "[ADD CLUB LINK]" },
    ],
  },
  {
    title: "Competitive Programming",
    blurb: "Contest strategy, speed and pattern recognition under pressure.",
    icon: "Timer",
    interests: ["DSA"],
    links: [
      { label: "Contests: Codeforces", url: "https://codeforces.com/" },
      { label: "Contests: CodeChef", url: "https://www.codechef.com/" },
      { label: "Handbook: CP Handbook", url: "https://cses.fi/book/book.pdf" },
    ],
  },
  {
    title: "AI / ML",
    blurb: "Python foundations, notebooks and your first models.",
    icon: "BrainCircuit",
    interests: ["AI/ML", "Python"],
    links: [
      { label: "Course: Kaggle Learn", url: "https://www.kaggle.com/learn" },
      { label: "Docs: scikit-learn", url: "https://scikit-learn.org/stable/getting_started.html" },
      { label: "Club notes", url: "[ADD CLUB NOTES LINK]" },
    ],
  },
  {
    title: "Cybersecurity",
    blurb: "Web security basics, CTFs and thinking like an attacker.",
    icon: "ShieldCheck",
    interests: ["Cybersecurity"],
    links: [
      { label: "Learn: TryHackMe", url: "https://tryhackme.com/" },
      { label: "Reference: OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
      { label: "Club notes", url: "[ADD CLUB NOTES LINK]" },
    ],
  },
];

export const skillInterests = [
  "Web Development",
  "Java",
  "Python",
  "AI/ML",
  "Cybersecurity",
  "DSA",
] as const;
