import { groq } from "next-sanity";
import { client } from "./lib/client";

export const getBanner = async () => {
  return client.fetch(groq`*[_type == "banner"]`);
};
