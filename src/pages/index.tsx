import { projects } from "@/assets/data/projects";
import ProfilePicture from "@/assets/images/profile.webp";
import { ProjectHistorySVG } from "@/assets/svg";
import ProjectCard from "@/elements/cards/project";
import { yearsOfExperience } from "@/utils/common";
import Image from "next/image";
import Link from "next/link";

const skills = [
  {
    name: "Javascript",
    color: "#F7DF1E",
  },
  {
    name: "Typescript",
    color: "#3178C6",
  },
  {
    name: "Nodejs",
    color: "#339933",
  },
  {
    name: "React",
    color: "#61DAFB",
  },
];

export default function Home() {
  return (
    <main className="mt-10 flex flex-col overflow-visible px-5 lg:px-24">
      <section className="flex flex-col-reverse gap-y-14">
        <article className="flex flex-col gap-y-5">
          <h1 className="text-6xl">
            My name
            <br />
            is <span className="font-bold">Giorgi</span>
          </h1>
          <p className="text-slate-600">I am Full Stack Developer</p>
          <ul className="mt-4 grid grid-cols-2 grid-rows-2 items-center">
            {skills.map((skill) => (
              <li key={skill.name} className="mb-3 mr-3 rounded bg-gray-200 px-7 py-3" style={{ backgroundColor: skill.color }}>
                {skill.name}
              </li>
            ))}
          </ul>
        </article>
        <section className="relative h-80 w-full">
          <Image src={ProfilePicture} alt="Profile Picture" className="absolute bottom-0 left-1/4 -z-10 w-[600px] max-w-none lg:w-[850px]" />
          <div className="absolute bottom-5 left-0 rounded-xl bg-slate-900 px-5 py-4 text-white">
            <h1 className="text-4xl leading-9">{yearsOfExperience}</h1>
            <h2 className="leading-4">years experience</h2>
          </div>
        </section>
      </section>

      <section className="mt-8">
        <header className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Latest Projects</h1>
            <Link href="/projects" className="text-xs underline">
              All projects
            </Link>
          </div>
          <ProjectHistorySVG className="rounded-md bg-slate-900 p-1 text-4xl text-white" />
        </header>
        <main className="my-8 flex flex-col gap-y-10 px-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={`0${index + 1}`} {...project} />
          ))}
        </main>
      </section>
    </main>
  );
}
