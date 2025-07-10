import React from "react";
// import MyName from "./my-name";

import Image from "next/image";
import { images } from "@/constants/images";
import Button from "../button";
import Typewriter from "./typewriter";
// import { getBanner } from "@/sanity/sanity-utils";
// import { urlFor } from "@/sanity/lib/image";

export default async function Banner() {
  return (
    <div className=" costume-padding bg-[#fcffee] pb-10 md:pb-28 border-b-2 border-primary-color/50">
      {/* <MyName /> */}
      <div className=" flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="lg:w-[50%]">
          <Typewriter />
          <div className=" my-8 ">
            <p className=" text-content-text w-[90%] text-lg/relaxed mb-8">
              I craft responsive, modern web interfaces using React and
              Tailwind. Passionate about clean code, intuitive UX, and
              performance. Let&apos;s build something great together.
            </p>
            <div className="hidden md:flex items-center gap-4">
              <Button type="primary">Let&apos;s Connect</Button>
              <Button type="secondary">Resume</Button>
            </div>
          </div>
        </div>

        <Image
          src={images.heroImage}
          width={346}
          height={380}
          alt="The developer's cartoon image"
          className=" shadow-xs ring-4 ring-primary-color bg-amber-100 hover:skew-x-3 transition duration-300 hover:scale-105 rounded-2xl "
        />
        <div className=" md:hidden flex flex-col gap-4">
          <Button type="primary">Let&apos;s Connect</Button>
          <Button type="secondary">Resume</Button>
        </div>
      </div>
    </div>
  );
}
