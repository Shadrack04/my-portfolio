import { Database, Home, Send, UserRound } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <nav className=" flex items-center justify-center z-99">
      <ul className="shadow-2xl border-1 border-primary-button flex bg-background items-center text-[90%] justify-center fixed bottom-8 gap-6 px-4 py-3 rounded-full">
        <li className=" text-primary-button font-bold flex items-center gap-1">
          <Home className=" size-4" />
          Home
        </li>
        <li className="font-bold flex items-center gap-1">
          <UserRound className=" size-4" />
          About
        </li>
        <li className="font-bold flex items-center gap-1">
          <Database className=" size-4" />
          Project
        </li>
        <li className="font-bold flex items-center gap-1">
          <Send className=" size-4" />
          Contact
        </li>
      </ul>
    </nav>
  );
}
