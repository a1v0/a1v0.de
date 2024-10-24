import { categoriesMap } from "@/app/article-categories";

export const validateCategory = (category: string) => {
	return category in categoriesMap;
};
