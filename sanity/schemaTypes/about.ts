import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "aboutMe",
  title: "AboutMe",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),

    defineField({
      name: "mainContent",
      title: "MainContent",
      type: "string",
    }),

    defineField({
      name: "subContent",
      title: "SubContent",
      type: "string",
    }),

    defineField({
      name: "stackImage",
      title: "StackImage",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
});
