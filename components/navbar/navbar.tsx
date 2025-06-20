import React from "react";

export default function Navbar() {
  return (
    <nav className=" flex items-center justify-center">
      <ul className="nav-shadow flex items-center justify-center fixed top-3 bg-foreground gap-8 px-4 py-2 rounded-full">
        <li className=" text-primary-button">Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
