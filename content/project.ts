export type Project = {
  slug: string;
  name: string;
  year: string;
  category: string;
  summary: string;
  problem: string;
  built: string;
  result: string;
  stack: string[];
  differently: string;
};

export const projects: Project[] = [
  {
    slug: "studexpress",
    name: "StudExpress",
    year: "2024 to now",
    category: "Mobile",
    summary:
      "A mobile booking app connecting students with inter-state travel across Nigerian universities.",
    problem: "TODO: what was hard about student travel before this existed?",
    built: "TODO: what you built and what your part was.",
    result: "TODO: one real number (users, bookings, universities).",
    stack: ["React Native", "Expo", "Node.js"],
    differently: "TODO: one honest thing you'd change.",
  },
  {
    slug: "flakeyradar",
    name: "FlakeyRadar",
    year: "2026",
    category: "AI / Developer tools",
    summary:
      "An AI tool that detects, classifies and automatically repairs flaky tests in JavaScript CI pipelines.",
    problem:
      "Flaky tests pass and fail at random, which wastes developer time and makes CI pipelines unreliable.",
    built:
      "A GitHub Actions workflow that reruns tests to detect flakiness, a fine-tuned CodeBERT model that classifies each one, a rule-based engine that opens fixes as pull requests, and a React dashboard.",
    result: "CI pass rate improved from 68% to 89%.",
    stack: ["Node.js", "TypeScript", "MongoDB", "React", "FastAPI", "GitHub Actions"],
    differently:
      "Automated repair for concurrency issues wasn't built because of limited training data, so I'd collect a bigger dataset first.",
  },
];