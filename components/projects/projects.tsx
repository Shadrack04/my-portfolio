import React from "react";
import ProjectItem from "./project-item";
import { getProjects } from "@/sanity/sanity-utils";
import Title from "../title";

export default async function Projects() {
  const projects = await getProjects();
  // console.log(projects);
  return (
    <div id="projects" className="costume-padding py-8">
      {/* <div className=" flex flex-col items-center mb-4">
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
      </div> */}

      <Title
        title="My Projects"
        subContent="Here are some of the projects I've worked on recently."
      />

      <div className=" my-8 lg:my-12 grid gap-y-10 place-items-center">
        {projects.map((project, index) => (
          <ProjectItem project={project} key={project._id} index={index} />
        ))}
      </div>
    </div>
  );
}
