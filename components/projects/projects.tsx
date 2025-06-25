import React from "react";
import ProjectItem from "./project-item";

export default function Projects() {
  return (
    <div className="costume-padding py-8 border-b-2 border-primary-color/50">
      <div className=" flex flex-col items-center mb-4">
        <h2 className=" text-4xl font-bold text-primary-text mb-8 underline underline-offset-10 decoration-primary-color">
          My Projects
        </h2>
        <p className=" text-content-text text-lg/relaxed">
          Here are some of the projects I’ve worked on recently.
        </p>
      </div>
      <div className=" my-12 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}
