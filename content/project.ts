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
    category: "Mobile App Developer",
    summary:
      "A mobile booking app connecting students with verified transport providers across Nigerian universities.",
    problem:
      "Booking campus travel is often fragmented across calls, chats and manual passenger lists. Students need a clear way to find a trip, pay and know their booking is confirmed.",
    built:
      "I build the React Native app end to end: Google Sign-In with backend token verification, booking and wallet flows, Flutterwave payments, downloadable PDF tickets, and push notifications through Expo. I also set up the release pipeline with EAS and shipped the Android build to Google Play.",
    decision:
      "Trip reminders run on an hourly cron job with a MongoDB-backed lock, so with two server replicas running, a student never gets the same reminder twice. I also used expo-server-sdk for push so notifications could be batched as booking volume grows.",
    result:
      "A live product on Google Play that students and transport providers use for booking across Nigerian universities.",
    stack: ["React Native", "Expo", "Node.js", "MongoDB"],
    differently:
      "I would organise the app by feature from day one. I refactored the screens into a domain-based structure later, and starting that way would have saved a lot of untangling as the app grew.",
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
    decision:
      "We kept detection in the existing CI workflow, served the model behind a small FastAPI boundary and required a human Apply Fix action instead of silently changing test code.",
    summary:
      "An AI tool that detects, classifies and automatically repairs flaky tests in JavaScript CI pipelines.",
    problem:
      "Flaky tests pass and fail at random, which wastes developer time and makes CI pipelines unreliable.",
    built:
      "A GitHub Actions workflow that reruns tests to detect flakiness, a fine-tuned CodeBERT model that classifies each one, a rule-based engine that opens fixes as pull requests, and a React dashboard.",
    result: "CI pass rate improved from 68% to 89%.",
    stack: [
      "Node.js",
      "TypeScript",
      "MongoDB",
      "React",
      "FastAPI",
      "GitHub Actions",
    ],
    differently:
      "Automated repair for concurrency issues wasn't built because of limited training data, so I'd collect a bigger dataset first.",
    firstImage: "/projects/flakeyradar/flakeyradar1.png",
    secondImage: "/projects/flakeyradar/flakeyradar2.png",
  },
];
