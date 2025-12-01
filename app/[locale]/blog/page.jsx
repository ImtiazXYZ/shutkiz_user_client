import BlogFilters from "../../_components/Blog/BlogFilters";
import getAllBlogsCategories from "../../_lib/blog/getAllBlogsCategories";
import getFilteredBlogs from "../../_lib/blog/getFilteredBlogs";

async function Page() {
  const categories = await getAllBlogsCategories();
  const initialBlogs = await getFilteredBlogs("", 1);

  return (
    <main>
      <BlogFilters initialBlogs={initialBlogs} categories={categories} />
    </main>
  );
}

export default Page;
