import { DogSVG, LinkSVG } from "@/assets/svg";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import DescriptionModal from "@/components/Modal";
import { classNames } from "@/utils/common";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: StaticImageData;
  name: string;
  index: string;
  url: string;
  isPet: boolean;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, url, tags, description, isPet, index, className, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function seeDetails() {
    setIsModalOpen(true);
  }

  return (
    <section className={classNames("relative flex flex-col", !!className && className)} {...props}>
      <Image src={image} alt="meeting stock image" className="aspect-[4/3] self-center rounded-lg object-cover" onClick={seeDetails} />
      <a href={url} target="_blank">
        <LinkSVG className="absolute -left-5 -top-5 cursor-pointer text-5xl" bgColor="white" />
      </a>
      {!!isPet && <DogSVG className="absolute -right-5 -top-5 text-5xl" bgColor="white" />}
      <span className="absolute -right-5 bottom-5 rounded-md bg-slate-900 p-2 text-2xl text-white">{index}</span>
      <h1 className="text-md font-bold" onClick={seeDetails}>
        {name}
      </h1>

      <DescriptionModal className="rounded" isActive={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1 className="text-xl font-bold">Description:</h1>
        <p>{description}</p>
        <h1 className="mt-5 text-xl font-bold">Tags:</h1>
        <ul className="flex flex-wrap gap-x-2">{tags.join(", ")}</ul>
      </DescriptionModal>
    </section>
  );
};

export default ProjectCard;
