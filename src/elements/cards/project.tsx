import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectCardProps {
  image: StaticImageData;
  name: string;
  index: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, index }) => {
  return (
    <section className="relative flex flex-col">
      <Image src={image} alt="meeting stock image" className="aspect-[4/3] self-center rounded-lg object-cover" />
      <h1 className="text-md mt-5 font-bold">{name}</h1>
      <span className="absolute -right-5 bottom-5 rounded-md bg-slate-900 p-2 text-2xl text-white">{index}</span>
    </section>
  );
};

export default ProjectCard;
