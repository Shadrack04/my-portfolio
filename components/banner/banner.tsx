import React from "react";

import Image from "next/image";

import { Button } from "../ui/button";
import Typewriter from "./typewriter";
import AnimationWrapper from "../animation/animation-wrapper";
import { getBanner } from "@/sanity/sanity-utils";

// import { ArrowDown } from "lucide-react";

export default async function Banner() {
  const banner = await getBanner();

  return (
    <div id="home" className=" costume-padding pb-10 md:pb-28">
      <div className=" flex flex-col 2xl:gap-30 md:flex-row gap-6 lg:gap-10 justify-center items-center">
        <div className="md:w-[50%]">
          <Typewriter />

          <AnimationWrapper
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className=" my-8 "
          >
            {banner?.content && (
              <p className=" text-content-text w-[90%] text-lg/relaxed mb-8">
                {banner.content}
              </p>
            )}
          </AnimationWrapper>
          <AnimationWrapper
            className="hidden md:flex items-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              asChild
              variant="default"
              type="button"
              className=" bg-primary-button transition-colors duration-300 ease-in-out cursor-pointer text-white text-md font-bold hover:bg-primary-color/90"
            >
              <a href="/contact">Let&apos;s Connect</a>
            </Button>
            <Button
              asChild
              variant="outline"
              type="button"
              className=" flex items-center bg-foreground cursor-pointer hover:bg-primary-button hover:text-white transition-colors duration-300 ease-in-out text-md font-bold border-primary-color border-1 text-primary-text"
            >
              <a
                href="/Shadrack-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </AnimationWrapper>
        </div>

        <AnimationWrapper
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {banner?.image?.asset.url && (
            <Image
              src={banner?.image.asset.url}
              width={346}
              height={380}
              alt="The developer's cartoon image"
              className=" shadow-xs ring-1 ring-primary-color bg-gray-50 rounded-2xl "
              loading="lazy"
            />
          )}
        </AnimationWrapper>

        {/* mobile banner buttons */}
        <AnimationWrapper
          className=" md:hidden flex mt-4 items-center gap-4"
          initial={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Button
            asChild
            variant="default"
            type="button"
            className=" bg-primary-button py-6 transition-colors duration-300 ease-in-out cursor-pointer text-white text-md font-bold hover:bg-primary-color/90"
          >
            <a href="/contact">Let&apos;s Connect</a>
          </Button>
          <Button
            asChild
            variant="outline"
            type="button"
            className=" flex items-center py-6 bg-foreground cursor-pointer hover:bg-primary-button hover:text-white transition-colors duration-300 ease-in-out text-md font-bold border-primary-color border-1 text-primary-text"
          >
            <a
              href="/Shadrack-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>
        </AnimationWrapper>
      </div>
      {/* <div className="hidden lg:block card-shadow size-14 p-2 animate-bounce absolute bottom-8 left-[20%] rounded-full">
        <ArrowDown className=" text-primary-color size-8" />
      </div> */}
    </div>
  );
}
