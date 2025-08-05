import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
    }),

    defineField({
      name: "name",
      type: "string",
    }),

    defineField({
      name: "date",
      title: "Date",
      type: "string",
    }),

    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),

    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),

    defineField({
      name: "tasks",
      title: "Tasks",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],

  orderings: [
    {
      title: "Custom Order",
      name: "customOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
