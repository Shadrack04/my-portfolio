import React from "react";

import Stack from "../stack/stack";

export default function About() {
  return (
    <div className=" py-8">
      <div className=" flex flex-col items-center">
        <h1 className=" text-4xl font-bold">About Me</h1>
        <div className=" flex flex-col gap-0.5 mb-8">
          <div className=" w-40 h-0.5 bg-primary-button ml-4"></div>
          <div className=" w-40 h-0.5 bg-primary-button"></div>
        </div>
        <p className=" w-[48rem] text-content-text text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam
          suscipit impedit beatae modi quam quibusdam commodi accusamus voluptas
          tempore ipsa mollitia alias quaerat exercitationem deserunt, sit
          accusantium distinctio maxime?
        </p>
      </div>
      <div className=" my-12">
        <div className=" flex flex-col items-center">
          <h2 className=" text-3xl font-bold text-primary-text mb-4">
            My Tech Stack
          </h2>

          <p className=" text-content-text ">
            These are some of the tools i use to create aesthetic magic
          </p>
        </div>
        <Stack />
      </div>
    </div>
  );
}
