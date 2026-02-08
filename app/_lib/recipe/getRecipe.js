import FetchPublic from "../FetchPublic";

export default async function getRecipe(slug) {
  const { fetchPublic } = FetchPublic();

  try {
    const response = await fetchPublic(`/recipe/${slug}`);
    return response;
  } catch (error) {
    return null;
  }
}
