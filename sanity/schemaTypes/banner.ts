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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "content",
      type: "string",
    }),
  ],
});
