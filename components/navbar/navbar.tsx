import React from "react";

export default function Navbar() {
  return (
    <nav className=" flex items-center justify-center z-99">
      <ul className=" shadow-xs shadow-green-800 flex items-center text-[90%] w-[320px] justify-center fixed bottom-8 bg-foreground gap-8 px-4 py-3 rounded-full">
        <li className=" text-primary-button">Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
