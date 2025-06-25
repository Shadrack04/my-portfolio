import { images } from "@/constants/images";
import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";
import Button from "../button";

export default function ProjectItem() {
  return (
    <div className=" shadow-xl hover:shadow-2xl rounded-md overflow-hidden hover:scale-105 transition-all duration-300">
      <Image src={images.kdnOg} alt="Kdn mockup image" className="" />
      <div className="px-2 my-4">
        <p className=" text-2xl font-bold text-special-text">KDN plus</p>
        <p className=" text-content-text text-sm">
          Stream your favorite, hot and new Nollywood movies anytime, anywhere-
          your ultimate home for cinematic entertainment.
        </p>
        <div className=" flex items-center gap-2 my-4 flex-wrap">
          <div className=" flex gap-1 items-center text-primary-text transition-all duration-300 justify-between bg-background hover:bg-primary-color hover:text-white py-2 px-4 rounded-full">
            <p className="  font-bold">ReactJs</p>
          </div>
          <div className=" flex gap-1 items-center text-primary-text hover:bg-primary-color hover:text-white transition-all duration-300 justify-between bg-background py-2 px-4 rounded-full">
            <p className=" font-bold">ReactJs</p>
          </div>
          <div className=" flex gap-1 items-center text-primary-text hover:bg-primary-color hover:text-white transition-all duration-300 justify-between bg-background py-2 px-4 rounded-full">
            <p className=" font-bold">ReactJs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
