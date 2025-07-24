import { groq } from "next-sanity";
import { client } from "./lib/client";
import {
  // AboutMeType,
  // BannerType,
  ExperienceType,
  IconType,
  ProjectsType,
  StacksType,
} from "@/types";

// export const getBanner = async (): Promise<BannerType> => {
export const getBanner = async () => {
  return client.fetch(groq`*[_type == "banner"][0]{
    _id,
    name,
    content,
    image{
    asset->{
    _id,
    url
    }
    }
    }`);
};

// export const getAboutMe = async (): Promise<AboutMeType> => {
export const getAboutMe = async () => {
  return client.fetch(groq`*[_type == "aboutMe"][0]{
  
    _id,
    title,
    subContent,
    subtitle,
      mainContent,
}`);
};

export const getStacks = async (): Promise<StacksType> => {
  return client.fetch(groq`*[_type == "aboutMe"][0]{
        stackImage[]{
    asset->{
      _id,
      url
    }
  },
    }`);
};

export const getExperience = async (): Promise<ExperienceType> => {
  return client.fetch(groq`*[_type == "experience"]{
    _id,
  name,
    company,
    role,
    date,
    tasks
}`);
};

export const getProjects = async (): Promise<ProjectsType> => {
  return client.fetch(groq`*[_type == "projects"]{
  _id,
    projectDescription,
    projectLink,
    gitLink,
    projectName,
    title,
    image{
    asset->{
      _id,
      url,
    }
    },
  stacks[]{
    stackName,
    image{
      asset->{
        _id,
        url
      }
    }
  }
}
  
`);
};

export const getIcons = async (): Promise<IconType> => {
  return client.fetch(groq`*[_type == "stacks"] | order(order asc){
  _id,
  title,
    svg,
    order
}`);
};
