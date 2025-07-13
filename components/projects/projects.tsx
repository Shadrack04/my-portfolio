import React from "react";
import ProjectItem from "./project-item";

export default function Projects() {
  return (
    <div className="costume-padding py-8">
      <div className=" flex flex-col items-center mb-4">
        <h2 className=" text-4xl font-bold text-primary-text mb-4 pb-2">
          My Projects
          <div className=" flex flex-col gap-0.5 mt-2 ">
            <div className=" w-46 h-0.5 bg-primary-color ml-4"></div>
            <div className=" w-46 h-0.5 bg-primary-color"></div>
          </div>
        </h2>
        <p className=" text-content-text text-center text-lg/relaxed">
          Here are some of the projects I&apos;ve worked on recently.
        </p>
      </div>

      <div className=" my-12 grid gap-y-20 lg:px-14 md:px-6 px-2 place-items-center">
        {[1, 2, 3].map((_, index) => (
          <ProjectItem key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
