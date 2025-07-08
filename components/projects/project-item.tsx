import { images } from "@/constants/images";
import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";

export default function ProjectItem() {
  return (
    <Card className=" md:w-md">
      <CardHeader className=" px-2 md:px-6">
        <div className=" w-full relative aspect-3/2 ">
          <Image
            src={images.kdn_hero_image}
            alt="Kdn mockup image"
            className=" shadow-lg"
            fill
          />
        </div>
      </CardHeader>
      <CardContent className="px-2 md:px-6">
        <div className="px-2">
          <p className=" text-xl font-bold mb-2">KDN plus</p>
          <div className=" flex items-center gap-2 my-1 flex-wrap">
            <div className=" card-shadow group px-2 bg-background flex gap-1 items-center text-primary-text transition-all duration-300 justify-between hover:bg-primary-color hover:text-white rounded-lg">
              <FaReact className=" text-primary-color group-hover:text-white" />
              <p className="  font-medium">ReactJs</p>
            </div>
            <div className=" card-shadow group px-2 bg-background flex gap-1 items-center text-primary-text transition-all duration-300 justify-between hover:bg-primary-color hover:text-white rounded-lg">
              <FaReact className=" text-primary-color group-hover:text-white" />
              <p className="  font-medium">ReactJs</p>
            </div>
            <div className=" card-shadow group px-2 bg-background flex gap-1 items-center text-primary-text transition-all duration-300 justify-between hover:bg-primary-color hover:text-white rounded-lg">
              <FaReact className=" text-primary-color group-hover:text-white" />
              <p className="  font-medium">ReactJs</p>
            </div>
          </div>
          <p className=" text-content-text text-lg">
            Stream your favorite, hot and new Nollywood movies anytime,
            anywhere- your ultimate home for cinematic entertainment.
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
    </Card>
  );
}
