import React from "react";

import Stack from "../stack/stack";

import Experience from "../experience/experience";
import AnimationWrapper from "../animation/animation-wrapper";

export default function About() {
  return (
    <div className="costume-padding py-8">
      <div className=" flex flex-col items-center mb-8">
        <h1 className=" text-4xl font-bold text-primary-text">About Me</h1>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam
            suscipit impedit beatae modi quam quibusdam commodi accusamus
            voluptas tempore ipsa mollitia alias quaerat exercitationem
            deserunt, sit accusantium distinctio maxime?
          </p>
        </AnimationWrapper>
      </div>
      <Stack />
      <Experience />
    </div>
  );
}
