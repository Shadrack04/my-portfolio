import { defineArrayMember, defineField, defineType } from "sanity";

export const projects = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),

    defineField({
      name: "projectName",
      title: "Project name",
      type: "string",
    }),

    defineField({
      name: "projectDescription",
      title: "Project description",
      type: "string",
    }),

    defineField({
      name: "stacks",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "stacks" } })],
    }),

    defineField({
      name: "projectLink",
      type: "string",
    }),

    defineField({
      name: "gitLink",
      type: "string",
    }),
  ],
});
