import React from "react";
// import MyName from "./my-name";

import Image from "next/image";
import { images } from "@/constants/images";
import Button from "../button";
import Typewriter from "./typewriter";
import AnimationWrapper from "../animation/animation-wrapper";
// import { getBanner } from "@/sanity/sanity-utils";
// import { urlFor } from "@/sanity/lib/image";

export default async function Banner() {
  return (
    <div className=" costume-padding pb-10 md:pb-28">
      {/* <MyName /> */}
      <div className=" flex flex-col 2xl:gap-30 md:flex-row gap-6 lg:gap-10 justify-center items-center">
        <div className="lg:w-[50%]">
          <Typewriter />

          <AnimationWrapper
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className=" my-8 "
          >
            <p className=" text-content-text w-[90%] text-lg/relaxed mb-8">
              I craft responsive, modern web interfaces using React and
              Tailwind. Passionate about clean code, intuitive UX, and
              performance. Let&apos;s build something great together.
            </p>
          </AnimationWrapper>
          <AnimationWrapper
            className="hidden md:flex items-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button type="primary">Let&apos;s Connect</Button>
            <Button type="secondary">Resume</Button>
          </AnimationWrapper>
        </div>

        <AnimationWrapper
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={images.heroImage}
            width={346}
            height={380}
            alt="The developer's cartoon image"
            className=" shadow-xs ring-4 ring-primary-color bg-amber-100 rounded-2xl "
            loading="lazy"
          />
        </AnimationWrapper>

        <AnimationWrapper
          className=" md:hidden flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Button type="primary">Let&apos;s Connect</Button>
          <Button type="secondary">Resume</Button>
        </AnimationWrapper>
      </div>
    </div>
  );
}
