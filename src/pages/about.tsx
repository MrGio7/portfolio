import AboutCard, { AboutCardProps } from "@/elements/cards/about";

import CodePicture from "@/assets/images/about/code.webp";
import ContactPicture from "@/assets/images/about/contact.webp";
import HobbyPicture from "@/assets/images/about/hobby.webp";
import TeamWorkPicture from "@/assets/images/about/teamwork.webp";
import WorkingPicture from "@/assets/images/about/working.webp";
import WorkingAlonePicture from "@/assets/images/about/workingalone.webp";
import { yearsOfExperience } from "@/utils/common";

const aboutCards: AboutCardProps[] = [
  {
    image: CodePicture,
    text: `Hi there, my name is Giorgi Bakashvili and I'm a full stack developer with ${yearsOfExperience} years of experience working with JavaScript and TypeScript.\nI have experience working on both commercial and freelance projects, which has allowed me to develop a diverse skill set and a strong work ethic.`,
  },
  {
    image: WorkingPicture,
    text: "My passion for programming is what drives me to constantly learn new things and stay up-to-date with the latest technologies. I spend most of my free time researching and evolving my skills, and I love tackling challenging problems and making groundbreaking decisions.",
  },
  {
    image: HobbyPicture,
    text: "When I'm not coding, you can find me biking, swimming, or solving riddles and puzzle games.",
  },
  {
    image: TeamWorkPicture,
    text: "I'm a very friendly and convivial person, and I enjoy working with others just as much as I enjoy working on standalone projects.",
  },
  {
    image: WorkingAlonePicture,
    text: "I believe that collaboration is key to building great software, but I'm also comfortable working independently when needed.",
  },
  {
    image: ContactPicture,
    text: "Overall, I'm excited to be part of the development community and to contribute to new and exciting projects. If you're interested in working with me, please don't hesitate to get in touch.",
  },
];

export default function About() {
  return (
    <main className="flex flex-col items-center px-5">
      <h1 className="my-8 text-5xl font-bold">About Me</h1>
      {aboutCards.map((card, index) => (
        <AboutCard key={index} {...card} />
      ))}
    </main>
  );
}
