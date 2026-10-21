export type Project = {
  id: string;
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
  decision: string;
  firstImage: string;
  secondImage: string;
  type: string;
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "studexpress",
    name: "StudExpress",
    type: "mobile",
    year: "2024 to now",
    category: "Mobile Developer",
    decision: "I kept the booking path short, made trip status visible at every step and designed failure states for unreliable mobile connections—not just the ideal path.",
    summary:
      "A mobile booking app connecting students with inter-state travel across Nigerian universities.",
    problem: "Booking campus travel is often fragmented across calls, chats and manual passenger lists. Students need a clear way to find a route, choose a trip and know their booking is confirmed.",
    built: "I lead operations and build the Expo application that handles route discovery, trip selection and booking. The mobile experience connects to the same Node.js services used by the operations team.",
    result: "One product now supports travel booking across multiple Nigerian universities, with a shared flow for students and the team managing each trip.",
    stack: ["React Native", "Expo", "Node.js"],
    differently: "I would invest earlier in event instrumentation around incomplete bookings. Better funnel data would make product decisions faster.",
    firstImage: "/projects/studexpress/studexpress1.png",
    secondImage: "/projects/studexpress/studexpress2.png",
  },
  {
    id: "02",
    slug: "flakeyradar",
    name: "FlakeyRadar",
    year: "2026",
    type: "web",
    category: "Full-stack developer",
    decision: "We kept detection in the existing CI workflow, served the model behind a small FastAPI boundary and required a human Apply Fix action instead of silently changing test code.",
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
      firstImage: "/projects/flakeyradar/flakeyradar1.png",
    secondImage: "/projects/flakeyradar/flakeyradar2.png",
  },
];