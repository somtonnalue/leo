import { defineField, defineType } from "sanity";

export const Category = defineType({
	name: "category",
	type: "document",
	title: "Categories",
	fields: [
		defineField({
			name: "name",
			title: "Category's name",
			type: "string",
		}),
	],
});
