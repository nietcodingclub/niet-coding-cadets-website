export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Challenge {
  id: number;
  title: string;
  prompt: string;
  difficulty: Difficulty;
  topic: string;
  hint: string;
}

/** Local challenge set — no backend needed. Add more freely. */
export const challenges: Challenge[] = [
  { id: 7, title: "Reverse Words", prompt: "Reverse the order of words in a sentence without using a built-in split-and-join one-liner.", difficulty: "Easy", topic: "Strings", hint: "Walk the string backwards and collect word boundaries." },
  { id: 11, title: "Two Sum", prompt: "Given an array and a target, return the indices of two numbers that add up to the target.", difficulty: "Easy", topic: "Arrays", hint: "A hash map turns this into a single pass." },
  { id: 14, title: "Balanced Brackets", prompt: "Determine whether a string of (), [] and {} is correctly balanced.", difficulty: "Easy", topic: "Stacks", hint: "Push openers, pop and match on closers." },
  { id: 27, title: "First Unique Character", prompt: "Find the first non-repeating character in a string and return its index.", difficulty: "Medium", topic: "Hashing", hint: "Count frequencies first, then scan once more in order." },
  { id: 33, title: "Rotate Matrix", prompt: "Rotate an N x N matrix by 90 degrees clockwise, in place.", difficulty: "Medium", topic: "Matrices", hint: "Transpose, then reverse every row." },
  { id: 41, title: "Longest Substring", prompt: "Find the length of the longest substring without repeating characters.", difficulty: "Medium", topic: "Sliding Window", hint: "Move the left pointer past the previous occurrence." },
  { id: 52, title: "Word Ladder", prompt: "Given two words and a dictionary, find the shortest transformation sequence length.", difficulty: "Hard", topic: "Graphs / BFS", hint: "Treat each word as a node; BFS guarantees shortest." },
  { id: 58, title: "Median of Two Sorted Arrays", prompt: "Find the median of two sorted arrays in logarithmic time.", difficulty: "Hard", topic: "Binary Search", hint: "Binary search the partition, not the values." },
  { id: 63, title: "Edit Distance", prompt: "Compute the minimum number of operations to convert one string into another.", difficulty: "Hard", topic: "Dynamic Programming", hint: "Build a 2D table over prefixes." },
];

/** Deterministic daily pick so everyone sees the same challenge each day. */
export const dailyChallenge = (difficulty?: Difficulty, seed = new Date()) => {
  const pool = difficulty ? challenges.filter((c) => c.difficulty === difficulty) : challenges;
  const day = Math.floor(
    Date.UTC(seed.getUTCFullYear(), seed.getUTCMonth(), seed.getUTCDate()) / 86400000,
  );
  return pool[day % pool.length];
};
