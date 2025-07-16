import { groq } from "next-sanity";
import { client } from "./lib/client";

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
