import FetchPublic from "../FetchPublic";

export default async function getProduct(slug) {
  const { fetchPublic } = FetchPublic();
  
  try {
    const response = await fetchPublic(`/product/${slug}`);
    return response;
  } catch (error) {
    return null;
  }
}
