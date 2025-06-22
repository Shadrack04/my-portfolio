import { defineField, defineType } from "sanity";

export const banner = defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "title",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "content",
      type: "string",
    }),
  ],
});
