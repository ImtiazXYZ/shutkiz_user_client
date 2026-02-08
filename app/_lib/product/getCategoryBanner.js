import FetchPublic from "../FetchPublic";

export default async function getCategoryBanner(slug) {
  const { fetchPublic } = FetchPublic();

  try {
    return await fetchPublic(`/category/get-banner/${slug}`);
  } catch {
    return null;
  }
}
