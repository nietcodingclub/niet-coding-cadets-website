import placeholderPhoto from "@/assets/placeholder-photo.jpg";

export type GalleryCategory = "Events" | "Workshops" | "Competitions" | "Team";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Controls masonry span — "tall" or "wide" for accents. */
  shape?: "tall" | "wide";
}

/**
 * Gallery images. Replace each placeholder src with a real club photograph
 * (add the file to src/assets and import it above).
 */
export const gallery: GalleryItem[] = [
  { src: placeholderPhoto, alt: "[ADD CLUB PHOTO] Coding competition", caption: "Coding competition", category: "Competitions", shape: "wide" },
  { src: placeholderPhoto, alt: "[ADD CLUB PHOTO] Technical workshop", caption: "Technical workshop", category: "Workshops" },
  { src: placeholderPhoto, alt: "[ADD CLUB PHOTO] Hackathon build night", caption: "Hackathon build night", category: "Events", shape: "tall" },
  { src: placeholderPhoto, alt: "[ADD CLUB PHOTO] Club meeting", caption: "Club meeting", category: "Team" },
  { src: placeholderPhoto, alt: "[ADD CLUB PHOTO] Team activity", caption: "Team activity", category: "Team" },
  { src: placeholderPhoto, alt: "[ADD CLUB PHOTO] Award ceremony", caption: "Award ceremony", category: "Events", shape: "wide" },
  { src: placeholderPhoto, alt: "[ADD CLUB PHOTO] Campus tech event", caption: "Campus tech event", category: "Events" },
  { src: placeholderPhoto, alt: "[ADD CLUB PHOTO] Problem solving session", caption: "Problem solving session", category: "Workshops", shape: "tall" },
  { src: placeholderPhoto, alt: "[ADD CLUB PHOTO] Contest leaderboard reveal", caption: "Contest leaderboard reveal", category: "Competitions" },
];

export const galleryFilters = ["All", "Events", "Workshops", "Competitions", "Team"] as const;

/** Instagram-style strip. Add real post images + permalinks only. */
export const instagramPosts: { image: string; alt: string; url: string }[] = [
  { image: placeholderPhoto, alt: "[ADD INSTAGRAM POST IMAGE]", url: "[ADD POST LINK]" },
  { image: placeholderPhoto, alt: "[ADD INSTAGRAM POST IMAGE]", url: "[ADD POST LINK]" },
  { image: placeholderPhoto, alt: "[ADD INSTAGRAM POST IMAGE]", url: "[ADD POST LINK]" },
  { image: placeholderPhoto, alt: "[ADD INSTAGRAM POST IMAGE]", url: "[ADD POST LINK]" },
];
