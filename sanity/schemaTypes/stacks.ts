import { defineField, defineType } from "sanity";

export const stacks = defineType({
  name: "stacks",
  title: "Stacks Icon",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
    }),

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

  orderings: [
    {
      title: "Custom Order",
      name: "customOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
