"use client";

import React from "react";
import { Database, Home, Send, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className=" flex bg-amber-400 items-center justify-center z-90">
      <ul className="nav-shadow hidden md:flex bg-foreground z-99 items-center text-[90%] justify-center fixed bottom-6 gap-4 md:gap-6 px-4 py-3 rounded-full">
        <li
          className={` hover:text-primary-color text-primary-text transition-all duration-400 cursor-pointer hover:font-bold`}
        >
          <Link
            href="/"
            className={` ${pathname == "/" ? " text-primary-button underline underline-offset-8 decoration-primary-color font-bold " : ""}flex items-center gap-1`}
          >
            <Home className=" size-4" />
            Home
          </Link>
        </li>
        <li className="hover:text-primary-button transition-all text-primary-text duration-400 cursor-pointer hover:font-bold flex items-center gap-1">
          <a
            href="/about"
            className={` ${pathname == "/about" ? " text-primary-button underline underline-offset-8 decoration-primary-color font-bold " : ""}flex items-center gap-1`}
          >
            <UserRound className=" size-4" />
            About
          </a>
        </li>
        <li className="hover:text-primary-button transition-all text-primary-text duration-400 cursor-pointer hover:font-bold flex items-center gap-1">
          <a
            href="/projects"
            className={` ${pathname == "/projects" ? " text-primary-button underline underline-offset-8 decoration-primary-color font-bold " : ""}flex items-center gap-1`}
          >
            <Database className=" size-4" />
            Project
          </a>
        </li>
        <li className="hover:text-primary-button transition-all text-primary-text duration-400 cursor-pointer hover:font-bold flex items-center gap-1">
          <a
            href="/contact"
            className={` ${pathname == "/contact" ? " text-primary-button underline underline-offset-8 decoration-primary-color font-bold " : ""}flex items-center gap-1`}
          >
            <Send className=" size-4" />
            Contact
          </a>
        </li>
        <ThemeToggle />
      </ul>
    </nav>
  );
}
