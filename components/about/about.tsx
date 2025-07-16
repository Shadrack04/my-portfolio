import React from "react";

import Stack from "../stack/stack";

import Experience from "../experience/experience";
import AnimationWrapper from "../animation/animation-wrapper";
import Projects from "../projects/projects";
import { getAboutMe } from "@/sanity/sanity-utils";

export default async function About() {
  const aboutMe = await getAboutMe();
  
  return (
    <div id="about" className="costume-padding py-8">
      <div className=" flex flex-col items-center mb-8">
        <h1 className=" text-4xl font-bold text-primary-text">
          {aboutMe?.title}
        </h1>
        <div className=" flex flex-col gap-0.5 mb-8">
          <div className=" w-40 h-0.5 bg-primary-color ml-4"></div>
          <div className=" w-40 h-0.5 bg-primary-color"></div>
        </div>
        <AnimationWrapper
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <p className=" lg:w-[48rem] text-content-text text-lg/relaxed">
            {aboutMe?.mainContent}
          </p>
        </AnimationWrapper>
      </div>
      <Stack subContent={aboutMe?.subContent} subTitle={aboutMe?.subtitle} />
      <Experience />
      <Projects />
    </div>
  );
}
