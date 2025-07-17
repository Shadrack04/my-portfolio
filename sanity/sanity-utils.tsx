import { groq } from "next-sanity";
import { client } from "./lib/client";
import { ExperienceType } from "@/types";

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

export const getAboutMe = () => {
  return client.fetch(groq`*[_type == "aboutMe"][0]{
  
    _id,
    title,
    subContent,
    subtitle,
      mainContent,
}`);
};

export const getStacks = () => {
  return client.fetch(groq`*[_type == "aboutMe"][0]{
        stackImage[]{
    asset->{
      _id,
      url
    }
  },
    }`);
};

export const getExperience = (): Promise<ExperienceType> => {
  return client.fetch(groq`*[_type == "experience"]{
  name,
    company,
    role,
    date,
    tasks
}`);
};

export const getProjects = () => {
  return client.fetch(groq`*[_type == "projects"]{
  _id,
    projectDescription,
    projectLink,
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
