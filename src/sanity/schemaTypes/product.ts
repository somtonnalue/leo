import { defineField, defineType } from "sanity";

export const Product = defineType({
	name: "product",
	type: "document",
	title: "Product",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Product's name",
		}),
		defineField({
			name: "images",
			type: "array",
			title: "Product's images",
			of: [{ type: "image" }],
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Product's description",
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Product's slug",
			options: {
				source: "name",
			},
		}),
		defineField({
			name: "price",
			type: "number",
			title: "Product's price",
		}),
		defineField({
			name: "category",
			title: "Product's category",
			type: "reference",
			to: [
				{
					type: "category",
				},
			],
		}),
	],
});
