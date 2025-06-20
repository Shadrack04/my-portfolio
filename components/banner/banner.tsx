"use client";

import React from "react";
import MyName from "./my-name";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { images } from "@/constants/images";

export default function Banner() {
  const [text, count] = useTypewriter({
    words: ["FRONTEND DEVELOPER", "WEB DEVELOPER"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="text-white">
      <MyName />
      <div>
        <div className="w-[50%]">
          <div>
            <h1 className=" text-4xl font-bold">
              Hi, I'm A <span>{text}</span>
              <Cursor />
            </h1>
          </div>
          <div className=" ">
            <p className=" text-content-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              itaque corrupti hic, atque molestias at quaerat odio sapiente
              incidunt, illo nemo pariatur dolores exercitationem dolorum
              voluptates porro cum in! Commodi? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Placeat fuga repellat illo, tenetur
              ipsum doloremque itaque qui a laboriosam velit eum possimus ipsa
              numquam voluptas cupiditate recusandae neque facilis libero.
            </p>
          </div>
        </div>
        <div>
          <Image src={images.heroImage} alt="The developer's cartoon image" />
        </div>
      </div>
    </div>
  );
}
