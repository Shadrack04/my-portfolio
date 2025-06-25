import React from "react";

import Stack from "../stack/stack";

export default function About() {
  return (
    <div className="costume-padding py-8 border-b-2 border-primary-color/50">
      <div className=" flex flex-col items-center mb-8">
        <h1 className=" text-4xl font-bold">About Me</h1>
        <div className=" flex flex-col gap-0.5 mb-8">
          <div className=" w-40 h-0.5 bg-primary-color ml-4"></div>
          <div className=" w-40 h-0.5 bg-primary-color"></div>
        </div>
        <p className=" w-[48rem] text-content-text text-lg/relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam
          suscipit impedit beatae modi quam quibusdam commodi accusamus voluptas
          tempore ipsa mollitia alias quaerat exercitationem deserunt, sit
          accusantium distinctio maxime?
        </p>
      </div>
      <div className=" my-12">
        <div className=" flex flex-col items-center mb-4">
          <h2 className=" text-3xl font-bold text-primary-text mb-8 underline underline-offset-10 decoration-primary-color">
            My Tech Stack
          </h2>

          <p className=" text-content-text text-lg/relaxed">
            These are some of the tools i use to create aesthetic magic
          </p>
        </div>
        <Stack />
      </div>
    </div>
  );
}
