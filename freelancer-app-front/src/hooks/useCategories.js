import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi } from "../services/categoryService"

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
    retry:false,
  });
  //{id,title,entitle}
  const { categories =[] } = data || {};
  const newcategories = categories.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  const transformedCategories = categories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return{isLoading, categories:newcategories,transformedCategories}
}
