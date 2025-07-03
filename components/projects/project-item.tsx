import { images } from "@/constants/images";
import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";
import Button from "../button";

export default function ProjectItem() {
  return (
    <div className=" grid grid-cols-2 gap-4">
      <Image src={images.kdn_hero_image} alt="Kdn mockup image" className="" />
      <div className="px-2">
        <p className=" text-2xl font-bold text-special-text">KDN plus</p>
        <p className=" text-content-text text-lg">
          Stream your favorite, hot and new Nollywood movies anytime, anywhere-
          your ultimate home for cinematic entertainment.
        </p>
        <div className=" flex items-center gap-2 my-4 flex-wrap">
          <div className=" card-shadow flex gap-1 items-center text-primary-text transition-all duration-300 justify-between hover:bg-primary-color hover:text-white py-2 px-6 rounded-full">
            <FaReact className=" text-primary-color size-8" />
            <p className="  font-bold">ReactJs</p>
          </div>
          <div className=" card-shadow flex gap-1 items-center text-primary-text transition-all duration-300 justify-between hover:bg-primary-color hover:text-white py-2 px-6 rounded-full">
            <FaReact className=" text-primary-color size-8" />
            <p className="  font-bold">ReactJs</p>
          </div>
          <div className=" card-shadow flex gap-1 items-center text-primary-text transition-all duration-300 justify-between hover:bg-primary-color hover:text-white py-2 px-6 rounded-full">
            <FaReact className=" text-primary-color size-8" />
            <p className="  font-bold">ReactJs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
