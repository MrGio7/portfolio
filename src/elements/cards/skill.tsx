import React from "react";
import SkillTag, { SkillTagProps } from "../tags/skill";

export interface SkillCardProps {
  skills: SkillTagProps[];
  text: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skills, text }) => {
  return (
    <section className="my-4">
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillTag name={skill.name} color={skill.color} />
        ))}
      </ul>
      <p className="mt-3">{text}</p>
    </section>
  );
};

export default SkillCard;
