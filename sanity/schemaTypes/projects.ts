import { defineField, defineType } from "sanity";

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
      title: "Stacks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              type: "image",
              options: { hotspot: true },
            }),

            defineField({
              name: "stackName",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "description",
              media: "image",
            },
          },
        },
      ],
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
