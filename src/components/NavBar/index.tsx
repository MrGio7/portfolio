import { LogoSVG } from "@/assets/svg";
import Link from "next/link";
import React, { useState } from "react";
import MobileNavBar from "./mobile";

interface NavBarProps {}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "experience" },
  { name: "Projects", href: "projects" },
  { name: "Contact Me", href: "contact" },
];

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <>
      <MobileNavBar />
    </>
  );
};

export default NavBar;
