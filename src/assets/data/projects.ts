import { StaticImageData } from "next/image";

import MeetingImg from "@/assets/images/projects/meeting-stock-image.webp";
import TegetaApprovedImg from "@/assets/images/projects/tegetaapproved.webp";
import TriviaImg from "@/assets/images/projects/trivia.webp";

export interface Project {
  name: string;
  isPet: boolean;
  image: StaticImageData;
  description: string;
  url: string;
  repo: string | null;
  tags: string[];
}

export const projects: Project[] = [
  {
    isPet: true,
    name: "Vidvely",
    image: MeetingImg,
    description: "A video chat app that allows you to chat with your friends.",
    url: "https://vidvely.vercel.app/",
    repo: "https://github.com/MrGio7/vidvely",
    tags: ["TypeScript", "NextJs", "NodeJs", "Trpc", "Serverless", "AWS Chime", "AWS Lambda", "AWS Cognito"],
  },
  {
    isPet: false,
    name: "Tegeta Approved",
    image: TegetaApprovedImg,
    description:
      "The e-commerce site for used car services is a platform that provides a wide range of features for buying, selling, trading-in, test driving, and leasing used cars. One of the key features of the site is its advanced CRM system, which uses artificial intelligence to provide personalized recommendations, insights, and customer support.",
    url: "https://tegetaapproved.ge/",
    repo: null,
    tags: ["TypeScript", "NextJs", "NodeJs", "GraphQL", "PostgreSQL", "Serverless", "AWS", "Docker", "etc..."],
  },
  {
    isPet: true,
    name: "Trivia",
    description: "This is fully functional trivia game with custom login support",
    image: TriviaImg,
    repo: null,
    url: "https://mrgio7.github.io/trivia/",
    tags: ["React", "API", "SQLLite"],
  },
];
