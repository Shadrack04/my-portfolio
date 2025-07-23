import { defineField, defineType } from "sanity";

export const stacks = defineType({
  name: "stacks",
  title: "Stacks Icon",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),

    defineField({
      name: "svg",
      title: "Svg Code",
      type: "text",
    }),
  ],
});
