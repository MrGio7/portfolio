import { GithubSVG, HomeSVG, InfoSVG, LinkedinSVG, LogoSVG, ProjectHistorySVG, SkillsSVG, WorkHistorySVG } from "@/assets/svg";
import FlyOutMenu, { FlyOutMenuProps } from "@/elements/menus/FlyOutMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Contact from "./Contact";

interface NavBarProps {}

const navigation: FlyOutMenuProps["solutions"] = [
  { name: "Home", href: "/", icon: HomeSVG, description: "Go to home page" },
  { name: "About Me", href: "/about", icon: InfoSVG, description: "Do you want to know more about me?" },
  { name: "My Skills", href: "/skills", icon: SkillsSVG, description: "Check out my skills!" },
  { name: "Experience", href: "/experience", icon: WorkHistorySVG, description: "Are you interested in my experience" },
  { name: "Projects", href: "/projects", icon: ProjectHistorySVG, description: "Have you seen my projects?" },
];

const callsToAction: FlyOutMenuProps["callsToAction"] = [
  { href: "https://github.com/MrGio7", icon: GithubSVG, name: "Give Star" },
  { href: "https://www.linkedin.com/in/giorgi-bakashvili/", icon: LinkedinSVG, name: "My Linkedin" },
];

const NavBar: React.FC<NavBarProps> = () => {
  const router = useRouter();
  const contactIsOpen = "contact" in router.query;

  return (
    <nav className="mt-2 grid grid-cols-7 grid-rows-1 items-center justify-items-center">
      <ul className="hidden flex-row items-center gap-4 lg:flex xl:gap-8">
        {navigation
          .filter((route) => route.href !== router.pathname)
          .map((nav, index) => (
            <Link key={index} href={nav.href}>
              {nav.name}
            </Link>
          ))}
      </ul>
      <FlyOutMenu solutions={navigation.filter((route) => route.href !== router.pathname)} callsToAction={callsToAction} />
      <div className="col-start-4 rounded-2xl bg-black px-2 py-3">
        <LogoSVG className="w-8 text-white lg:w-10" />
      </div>
      <Link href="?contact" className="col-start-5 col-end-8 rounded-full bg-gray-200 px-7 py-3 text-xs lg:text-sm">
        Contact Me
      </Link>
      {contactIsOpen && <Contact />}
    </nav>
  );
};

export default NavBar;
