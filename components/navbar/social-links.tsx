import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import ThemeSwitch from "../theme-switch";

export default function SocialLinks() {
  return (
    <div className="nav-shadow hidden md:flex flex-col z-99 bg-foreground items-center text-[90%] justify-center md:fixed right-2 md:right-10 -translate-y-1/2 top-1/2 gap-6 px-3 py-4 rounded-full">
      <div className=" hover:text-primary-color text-primary-text cursor-pointer">
        <FaGithub className=" size-6" />
      </div>
      <div className="hover:text-primary-color text-primary-text cursor-pointer">
        <FaLinkedinIn />
      </div>
      <div className="hover:text-primary-color text-primary-text cursor-pointer">
        <FaXTwitter />
      </div>
      <ThemeSwitch />
    </div>
  );
}
