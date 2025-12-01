import FetchPublic from "../FetchPublic"


export default async function getFiltereRecipe(categoryIdsString = "", page = 1) {
  const { fetchPublic } = FetchPublic();
  const response = await fetchPublic(`/recipes?category_ids=${categoryIdsString}&page=${page}`);
  return response;
}
