import FetchPublic from "../FetchPublic"


export default async function getFilteredProduct(slug,categoryIdsString = "", page = 1) {
  const { fetchPublic } = FetchPublic();
  const response = await fetchPublic(`/all-products/${slug}?subcategory_ids=${categoryIdsString}&page=${page}`);
  return response;
}
