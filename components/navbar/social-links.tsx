import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="nav-shadow flex flex-col border-1 z-99 bg-foreground border-primary-button items-center text-[90%] justify-center fixed right-2 md:right-10 -translate-y-1/2 top-1/2 gap-10 px-3 py-4 rounded-full">
      <div className="hover:text-primary-button cursor-pointer">
        <FaGithub className=" size-6" />
      </div>
      <div className="hover:text-primary-button cursor-pointer">
        <FaLinkedinIn />
      </div>
      <div className="hover:text-primary-button cursor-pointer">
        <FaXTwitter />
      </div>
    </div>
  );
}
