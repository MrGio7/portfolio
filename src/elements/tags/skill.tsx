import React from "react";

export interface SkillTagProps {
  name: string;
  color: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ color, name }) => {
  return (
    <li className="rounded bg-gray-200 px-7 py-3" style={{ backgroundColor: color }}>
      {name}
    </li>
  );
};

export default SkillTag;
