import React from "react";
import Image, { StaticImageData } from "next/image";

export interface AboutCardProps {
  image: StaticImageData;
  text: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ image, text }) => {
  return (
    <section className="my-5">
      <p className="whitespace-pre-wrap text-justify">{text}</p>
      <Image src={image} alt="code text" className="mt-5 rounded" />
    </section>
  );
};

export default AboutCard;
