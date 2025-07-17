import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { banner } from "./banner";
import { about } from "./about";
import { experience } from "./experience";
import { projects } from "./projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    banner,
    about,
    experience,
    projects,
  ],
};
