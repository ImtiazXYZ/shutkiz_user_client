import FetchPublic from "../FetchPublic"


export default async function getFilteredBlogs(categoryIdsString = "", page = 1) {
  const { fetchPublic } = FetchPublic();
  const response = await fetchPublic(`/blogs?category_ids=${categoryIdsString}&page=${page}`);
  return response;
}
