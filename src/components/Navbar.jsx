"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logoLight.png";
import hamDark from "@/public/hamIcon.svg";
import closeDark from "@/public/closeIcon.svg";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },

  {
    id: 2,
    url: "/services",
    title: "Services",
  },

  {
    id: 3,
    url: "/about",
    title: "About",
  },

  {
    id: 4,
    url: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  const navToggle = () => {
    settoggle(!toggle);
  };

  useEffect(()=>{
    settoggle(false);
  },[]);

  console.log(toggle);

  return (
    <nav className="flex_just_between min-w-full py-5 h-28 sticky top-0 bg-black/80 px-5 md:px-20 lg:px-40 z-30">
      <Link href="/" className="flex_row_mid">
        <Image
          src={logo}
          alt="Synafeia Logo"
          className="w-16 h-16 -ml-2 md:w-24 md:h-24"
        />
        <span className="text-2xl md:text-5xl font-bold text-white -ml-2">
          Synafeia
        </span>
      </Link>

      <div className="hidden gap-3 md:flex">
        {links.map((link) => (
          <Link className={(pathname === link.url) ? "activeNav" : "nonActiveNav"} key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>

      <div className="flex md:hidden">
        <Image
          onClick={navToggle}
          src={toggle ? closeDark : hamDark}
          width={40}
          height={40}
          alt="menu-icon"
        />
      </div>
      <div className={toggle ? "hamContainer" : "hidden"}>
        {links.map((link) => (
          <Link
            className="hamItems"
            key={link.id}
            href={link.url}
            onClick={navToggle}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
