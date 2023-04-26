import { LogoSVG } from "@/assets/svg";
import Link from "next/link";
import React, { useState } from "react";

interface NavBarProps {}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "experience" },
  { name: "Projects", href: "projects" },
  { name: "Contact Me", href: "contact" },
];

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className="flex w-full flex-row items-center justify-between gap-x-24 bg-cyan-950 px-5 py-3 text-cyan-50">
      <header>
        <LogoSVG className="w-6" />
      </header>
      <main className="scrollbar scrollbar-hidden flex snap-x flex-row gap-x-6 overflow-x-auto text-cyan-50">
        {navigation.map((nav, idx) => (
          <Link key={idx} href={nav.href} className="snap-center whitespace-nowrap rounded bg-cyan-800 px-5 py-2 text-xl">
            {nav.name}
          </Link>
        ))}
      </main>
    </nav>
  );
};

export default NavBar;
