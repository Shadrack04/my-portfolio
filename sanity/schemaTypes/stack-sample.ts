import { defineField, defineType } from "sanity";

export const stackSample = defineType({
  name: "stackSample",
  title: "Stack Sample",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "stackImage",
      title: "StackImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
