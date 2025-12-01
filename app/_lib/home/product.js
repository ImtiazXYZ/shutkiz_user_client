import FetchPublic from "../FetchPublic";

export async function getNewArrivalProducts() {
  const { fetchPublic } = FetchPublic();
  const response = await fetchPublic(`/new-arrival-products`);
  return response;
}

export async function getAllNewArrivalProducts(page = 1) {
  const { fetchPublic } = FetchPublic();
  const response = await fetchPublic(`/new-arrival-all-products?page=${page}`);
  return response;
}

export async function getNavbarCategories() {
  const { fetchPublic } = FetchPublic();
  const response = await fetchPublic(`/navbar-categories`);
  return response;
}
