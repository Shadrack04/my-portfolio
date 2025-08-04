import React from "react";
import ProjectItem from "./project-item";
import { getProjects } from "@/sanity/sanity-utils";
import Title from "../title";

export default async function Projects() {
  const projects = await getProjects();
  // console.log(projects);
  return (
    <div id="projects" className="costume-padding py-8">
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
