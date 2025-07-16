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
  return client.fetch(groq`*[_type == "aboutMe"]{
  stackImage,
    _id,
    title,
    subContent,
    subtitle,
      mainContent,
}`);
};
