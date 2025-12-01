import FetchPublic from "../FetchPublic";

export default async function getAllBlogs() {
  const { fetchPublic } = FetchPublic();
  const response = await fetchPublic("/blogs");
  return response;
}
