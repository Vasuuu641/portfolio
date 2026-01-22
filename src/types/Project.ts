export type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
  techStack: string[];
  githubURL: string;

  overview: {
    title: string;
    description: string;
    stats: { label: string; value: string }[];
    timeline: string;
    role: string;
    liveDemoURL?: string;
    githubURL?: string;
  };

  design: string;
  development: string;
  challenges: string;
};
