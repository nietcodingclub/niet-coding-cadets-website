import placeholderPhoto from "@/assets/placeholder-photo.jpg";

export type GalleryCategory =
  | "Events"
  | "Workshops"
  | "Competitions"
  | "Team";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  shape?: "tall" | "wide";
}

/**
 * Gallery images.
 * Add real club photographs to src/assets/gallery and import them above.
 */
export const gallery: GalleryItem[] = [
  {
    src: placeholderPhoto,
    alt: "[ADD PHOTO] Cyber Sapiens",
    caption: "Cyber Sapiens",
    category: "Competitions",
    shape: "wide",
  },
  {
    src: placeholderPhoto,
    alt: "[ADD PHOTO] Battle of Bots",
    caption: "Battle of Bots",
    category: "Competitions",
  },
  {
    src: placeholderPhoto,
    alt: "[ADD PHOTO] Escape Room",
    caption: "Escape Room",
    category: "Competitions",
    shape: "tall",
  },
  {
    src: placeholderPhoto,
    alt: "[ADD PHOTO] Algo Arena",
    caption: "Algo Arena",
    category: "Competitions",
  },
  {
    src: placeholderPhoto,
    alt: "[ADD PHOTO] Dominance",
    caption: "Dominance",
    category: "Competitions",
    shape: "wide",
  },
  {
    src: placeholderPhoto,
    alt: "[ADD PHOTO] Segue 3.0",
    caption: "Segue 3.0",
    category: "Events",
  },
  {
    src: placeholderPhoto,
    alt: "[ADD PHOTO] Coding Cadets team",
    caption: "Coding Cadets Team",
    category: "Team",
  },
  {
    src: placeholderPhoto,
    alt: "[ADD PHOTO] Technical session",
    caption: "Technical Session",
    category: "Workshops",
    shape: "tall",
  },
  {
    src: placeholderPhoto,
    alt: "[ADD PHOTO] Coding Cadets event",
    caption: "Coding Cadets Event",
    category: "Events",
  },
];

export const galleryFilters = [
  "All",
  "Events",
  "Workshops",
  "Competitions",
  "Team",
] as const;

/**
 * Instagram-style strip.
 * Add real post images and verified Instagram post links only.
 */
export const instagramPosts: {
  image: string;
  alt: string;
  url: string;
}[] = [
    {
      image: placeholderPhoto,
      alt: "[ADD INSTAGRAM POST IMAGE]",
      url: "[ADD POST LINK]",
    },
    {
      image: placeholderPhoto,
      alt: "[ADD INSTAGRAM POST IMAGE]",
      url: "[ADD POST LINK]",
    },
    {
      image: placeholderPhoto,
      alt: "[ADD INSTAGRAM POST IMAGE]",
      url: "[ADD POST LINK]",
    },
    {
      image: placeholderPhoto,
      alt: "[ADD INSTAGRAM POST IMAGE]",
      url: "[ADD POST LINK]",
    },
  ];