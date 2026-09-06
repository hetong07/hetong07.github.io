import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Tong He", // TODO: confirm your preferred display name
  EMAIL: "hetong07@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Tong He — software engineer at Google working on large-scale pretraining systems and scaling LLM training, with a background in distributed systems and software–hardware co-design.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/hetong07",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/tong-he-931bb7b6/",
  },
];
