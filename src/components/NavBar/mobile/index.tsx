import { ContactSVG, HomeSVG, ProjectHistorySVG, WorkHistorySVG } from "@/assets/svg";
import Link from "next/link";
import React from "react";

interface NavBarProps {}

const navigation = [
  { name: "Home", href: "/", Icon: HomeSVG },
  { name: "Experience", href: "experience", Icon: WorkHistorySVG },
  { name: "Projects", href: "projects", Icon: ProjectHistorySVG },
  { name: "Contact Me", href: "contact", Icon: ContactSVG },
];

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className="fixed bottom-0 z-10 flex w-full flex-row items-center justify-evenly bg-cyan-50 text-cyan-900">
      {navigation.map(({ Icon, href, name }, idx) => (
        <Link key={idx} href={href} className="flex flex-col items-center justify-center">
          <Icon className="text-2xl" />
          <span className="text-xs">{name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
