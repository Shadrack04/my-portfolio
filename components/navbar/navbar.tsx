import { Database, Home, Send, UserRound } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <nav className=" flex items-center justify-center z-90">
      <ul className="nav-shadow flex border-1 bg-foreground border-primary-button z-99 items-center text-[90%] justify-center fixed top-4 gap-6 px-4 py-3 rounded-full">
        <li className=" hover:text-primary-button  transition-all duration-400 cursor-pointer hover:font-bold flex items-center gap-1">
          <Home className=" size-4" />
          Home
        </li>
        <li className="hover:text-primary-button transition-all duration-400 cursor-pointer hover:font-bold flex items-center gap-1">
          <UserRound className=" size-4" />
          About
        </li>
        <li className="hover:text-primary-button transition-all duration-400 cursor-pointer hover:font-bold flex items-center gap-1">
          <Database className=" size-4" />
          Project
        </li>
        <li className="hover:text-primary-button transition-all duration-400 cursor-pointer hover:font-bold flex items-center gap-1">
          <Send className=" size-4" />
          Contact
        </li>
      </ul>
    </nav>
  );
}
