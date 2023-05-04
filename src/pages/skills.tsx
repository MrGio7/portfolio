import SkillCard, { SkillCardProps } from "@/elements/cards/skill";
import SkillTag from "@/elements/tags/skill";

const hardSkills: SkillCardProps[] = [
  {
    skills: [
      {
        name: "Javascript",
        color: "#F7DF1E",
      },
      {
        name: "Typescript",
        color: "#3178C6",
      },
    ],
    text: "Proficient in JavaScript and TypeScript: I have over 3 years of experience working with JavaScript and TypeScript. I'm can write clean and efficient code using best practices and I keep up-to-date with the latest updates.",
  },
  {
    skills: [
      {
        name: "React / Nextjs",
        color: "#61DAFB",
      },
      {
        name: "Nodejs",
        color: "#339933",
      },
      {
        name: "Graphql",
        color: "#f6009c",
      },
    ],
    text: "Experienced in working with frameworks such as React, Next.js, Node.js, and GraphQL: I have experience working with popular frameworks in the industry. I'm proficient in building frontend applications with React and Next.js and backend applications with Node.js and GraphQL. I'm familiar with building RESTful APIs and have experience working with popular libraries such as Apollo.",
  },
  {
    skills: [
      {
        name: "MySQL",
        color: "#4479A1",
      },
      {
        name: "PostgreSQL",
        color: "#336791",
      },
      {
        name: "MongoDB",
        color: "#47A248",
      },
      {
        name: "DynamoDB",
        color: "#4053D6",
      },
    ],
    text: "Familiarity with SQL databases such as PostgreSQL and MySQL, as well as nonrelational databases such as MongoDB and DynamoDB: I have experience working with both SQL and nonrelational databases. I'm comfortable using SQL to write complex queries, and I have experience optimizing database performance. I'm also familiar with NoSQL databases such as MongoDB and DynamoDB, and I'm comfortable working with non-relational data models.",
  },
  {
    skills: [
      {
        name: "AWS",
        color: "#FF9900",
      },
      {
        name: "Google Cloud",
        color: "#4285F4",
      },
      {
        name: "Docker",
        color: "#2496ED",
      },
    ],
    text: "Proficient in using AWS services for deployment, including EC2, Lambda, S3, SES, SQS, Cognito, and more: I have experience deploying applications using a wide range of AWS services. I'm comfortable setting up and configuring EC2 instances, deploying Lambda functions, and using S3 for storage. I'm also familiar with using SES and SQS for email and message queuing, as well as Cognito for user authentication and authorization.",
  },
];

const softSkills: SkillCardProps[] = [
  {
    skills: [
      {
        name: "Problem Solving",
        color: "#F7DF1E",
      },
    ],
    text: "I believe that as a mid-level full-stack developer, I possess several important soft skills. For instance, I have strong problem-solving skills, which I demonstrate by my ability to learn and work with new technologies and frameworks.",
  },
  {
    skills: [
      {
        name: "Communication",
        color: "#61DAFB",
      },
    ],
    text: "I am also an excellent communicator, as evidenced by my experience teaching junior developers and my ability to work well both in groups and on standalone projects. Additionally, I am adaptable and willing to learn, as my passion for programming drives me to constantly improve my skills.",
  },
  {
    skills: [
      {
        name: "Well-Documented Code",
        color: "#FF9900",
      },
    ],
    text: "I have good attention to detail, which is reflected in my ability to write well-documented and optimized code. Furthermore, I am organized and able to manage my time effectively, which is important for successfully completing complex projects.",
  },
  {
    skills: [
      {
        name: "Patience",
        color: "#47A248",
      },
      {
        name: "Presrvance",
        color: "#4053D6",
      },
    ],
    text: "When faced with technical challenges, I am patient and persevering, as I am willing to spend time researching and evolving in programming.",
  },
  {
    skills: [
      {
        name: "Creativity",
        color: "#F7DF1E",
      },
      {
        name: "Innovative",
        color: "#61DAFB",
      },
    ],
    text: "Finally, I am creative and innovative, as my interest in puzzle games and riddles shows that I enjoy thinking outside the box to find solutions.",
  },
];

export default function Skills() {
  return (
    <main className="mt-8 flex flex-col px-5">
      <h1 className="self-center text-5xl font-bold">My Skills</h1>
      <h2 className="mt-8 text-2xl font-bold">Hard Skills</h2>
      {hardSkills.map((card, index) => (
        <>
          <SkillCard key={index} {...card} />
          <hr />
        </>
      ))}

      <h2 className="mt-8 text-2xl font-bold">Soft Skills</h2>
      {softSkills.map((card, index) => (
        <>
          <SkillCard key={index} {...card} />
          <hr />
        </>
      ))}
    </main>
  );
}
