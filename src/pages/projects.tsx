import { projects } from "@/assets/data/projects";
import ProjectCard from "@/elements/cards/project";
import React from "react";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <main className="px-5">
      <h1 className="my-5 text-3xl font-bold">Projects</h1>
      <ul className="my-5 flex flex-col gap-y-10 px-5">
        {projects.map((project, index) => (
          <ProjectCard index={`0${index + 1}`} {...project} />
        ))}
      </ul>
    </main>
  );
};

export default Projects;
