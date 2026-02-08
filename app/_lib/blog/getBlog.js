import FetchPublic from "../FetchPublic";

export default async function getBlog(slug) {
  const { fetchPublic } = FetchPublic();
  
  try {
    const response = await fetchPublic(`/blog/${slug}`);
    return response;
  } catch (error) {
    return null;
  }
}
