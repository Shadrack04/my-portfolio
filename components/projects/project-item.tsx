import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

import { ProjectItemType } from "@/types";
import AnimationWrapper from "../animation/animation-wrapper";
import { FaGithub } from "react-icons/fa6";

type ProjectItemProps = {
  index: number;
  project: ProjectItemType;
};

export default function ProjectItem({ index, project }: ProjectItemProps) {
  const projectImage = project?.image.asset.url;
  const alignment = index % 2 !== 0 ? "lg:flex-row-reverse" : "";
  return (
    <div
      className={`${alignment} flex justify-center gap-4 flex-col lg:flex-row`}
    >
      {/* <AnimationWrapper className=" flex-1 w-full lg:w-[350px] hover:scale-102 transition-all duration-300 rounded-md"> */}
      <AnimationWrapper
        initial={{ scale: 0 }}
        transition={{ duration: 0.3 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="relative w-full lg:w-[350px] aspect-[450/260] flex-1 rounded-md overflow-hidden"
      >
        <Image
          src={projectImage}
          alt="Kdn mockup image"
          fill
          className="object-fill hover:scale-105 transition-all duration-300"
        />
      </AnimationWrapper>

      {/* </AnimationWrapper> */}

      <div className="px-2 flex-1 flex flex-col">
        <div className="">
          <p className=" text-2xl font-bold text-special-text">
            {project?.projectName}
          </p>
          <p className=" text-content-text text-lg">
            {project?.projectDescription}
          </p>
          <div className=" flex items-center gap-2 my-4 flex-wrap">
            {project?.stacks?.map((stack, index) => (
              <div
                key={index}
                className=" card-shadow px-2 md:px-3 md:py-1 flex gap-1 items-center text-primary-text transition-all duration-300 justify-between rounded-lg"
              >
                {/* <FaReact className=" group-hover:text-white text-primary-color" /> */}
                <Image
                  src={stack.stackImage.asset.url}
                  alt={`${stack.title} icon`}
                  height={15}
                  width={15}
                />
                <p className="  font-medium">{stack.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex gap-4">
          {project?.projectLink && (
            <Button
              asChild
              className=" bg-primary-button transition-colors duration-300 ease-in-out cursor-pointer text-white text-md font-bold hover:bg-primary-color/90"
            >
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </Button>
          )}
          {project?.gitLink && (
            <Button className=" flex group items-center bg-foreground cursor-pointer hover:bg-primary-button hover:text-white transition-colors duration-300 ease-in-out text-md font-bold border-primary-color border-1 text-primary-text">
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Git
              </a>
              <div>
                <FaGithub className=" size-4 text-primary-color group-hover:text-white" />
              </div>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
