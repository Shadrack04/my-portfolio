import { images } from "@/constants/images";
import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";

import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import AnimationWrapper from "../animation/animation-wrapper";
import { animate } from "framer-motion";

type ProjectItemProps = {
  index: number;
};

export default function ProjectItem({ index }: ProjectItemProps) {
  const alignment = index % 2 !== 0 ? "lg:flex-row-reverse" : "";
  return (
    <div
      className={`${alignment} flex justify-center gap-4 flex-col lg:flex-row`}
    >
      <AnimationWrapper className=" flex-1 w-full lg:w-[350px] hover:scale-102 transition-all duration-300 rounded-md">
        <Image
          src={images.kdn_hero_image}
          alt="Kdn mockup image"
          width={463}
          height={260}
          className=" object-cover hover:scale-102 transition-all duration-300 rounded-md"
        />
      </AnimationWrapper>

      <div className="px-2 flex-1 flex flex-col">
        <div className="">
          <p className=" text-2xl font-bold text-special-text">KDN plus</p>
          <p className=" text-content-text text-lg">
            Stream your favorite, hot and new Nollywood movies anytime,
            anywhere- your ultimate home for cinematic entertainment.
          </p>
          <div className=" flex items-center gap-2 my-4 flex-wrap">
            <div className=" card-shadow px-2 group flex gap-1 items-center text-primary-text transition-all duration-300 justify-between hover:bg-primary-color hover:text-white rounded-lg">
              <FaReact className=" group-hover:text-white text-primary-color" />
              <p className="  font-medium">ReactJs</p>
            </div>
            <div className=" card-shadow px-2 group flex gap-1 items-center text-primary-text transition-all duration-300 justify-between hover:bg-primary-color hover:text-white rounded-lg">
              <FaReact className=" group-hover:text-white text-primary-color" />
              <p className="  font-medium">ReactJs</p>
            </div>
            <div className=" card-shadow px-2 group flex gap-1 items-center text-primary-text transition-all duration-300 justify-between hover:bg-primary-color hover:text-white rounded-lg">
              <FaReact className=" group-hover:text-white text-primary-color" />
              <p className="  font-medium">ReactJs</p>
            </div>
          </div>
        </div>
        <div className=" flex gap-4">
          <Button className=" px-4 py-2 rounded-md text-md font-bold bg-primary-button text-white">
            Preview
          </Button>
          <Button className=" flex items-center px-4 py-2 rounded-md text-md font-bold border-primary-color border-1 text-primary-text">
            Code
            <FaGithub className=" size-4 text-primary-color" />
          </Button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className=" grid grid-cols-2 gap-4">
  <Image src={images.kdn_hero_image} alt="Kdn mockup image" className="" />
  <div className="px-2">
    <p className=" text-2xl font-bold text-special-text">KDN plus</p>
    <p className=" text-content-text text-lg">
      Stream your favorite, hot and new Nollywood movies anytime, anywhere- your
      ultimate home for cinematic entertainment.
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
</div>; */
}

{
  /* <Card className=" w-md">
  <div className="">
    <CardHeader>
      <div className=" w-full relative aspect-3/2 ">
        <Image
          src={images.kdn_hero_image}
          alt="Kdn mockup image"
          className=" shadow-lg"
          fill
        />
      </div>
    </CardHeader>
    <CardContent>
      <div className="px-2">
        <p className=" text-xl font-bold mb-2">KDN plus</p>
        <div className=" flex items-center gap-2 my-1 flex-wrap">
          <div className=" card-shadow px-2 bg-background flex gap-1 items-center text-primary-text transition-all duration-300 justify-between hover:bg-primary-color hover:text-white rounded-lg">
            <FaReact className=" text-primary-color" />
            <p className="  font-medium">ReactJs</p>
          </div>
          <div className=" card-shadow px-2 bg-background flex gap-1 items-center text-primary-text transition-all duration-300 justify-between hover:bg-primary-color hover:text-white rounded-lg">
            <FaReact className=" text-primary-color" />
            <p className="  font-medium">ReactJs</p>
          </div>
          <div className=" card-shadow px-2 bg-background flex gap-1 items-center text-primary-text transition-all duration-300 justify-between hover:bg-primary-color hover:text-white rounded-lg">
            <FaReact className=" text-primary-color" />
            <p className="  font-medium">ReactJs</p>
          </div>
        </div>
        <p className=" text-content-text text-lg">
          Stream your favorite, hot and new Nollywood movies anytime, anywhere-
          your ultimate home for cinematic entertainment.
        </p>
      </div>
    </CardContent>
    <CardFooter className=" mt-2 flex gap-4 justify-end">
      <Button className=" px-4 py-2 rounded-md text-md font-bold bg-primary-button text-white">
        Preview
      </Button>
      <Button className=" flex items-center px-4 py-2 rounded-md text-md font-bold border-primary-color border-1 text-primary-text">
        Code
        <FaGithub className=" size-4 text-primary-color" />
      </Button>
    </CardFooter>
  </div>
</Card>; */
}
