import Image from "next/image";
import { notFound } from "next/navigation";
import ProductFilters from "../../../_components/Category/ProductFilters";
import getCategoryBanner from "../../../_lib/product/getCategoryBanner";
import getFilteredProduct from "../../../_lib/product/getFilteredProduct";
import getProductsSubcategories from "../../../_lib/product/getProductsSubcategories";


async function CategoryPage({ params }) {
  const { slug } = params;
  const categories = await getProductsSubcategories(slug);
  const initialProducts = await getFilteredProduct(slug, "", 1);
  const banner = await getCategoryBanner(slug);
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;

  // INVALID SLUG HANDLING
  if ( !categories || !initialProducts || (Array.isArray(initialProducts) && initialProducts.length === 0)) {
    notFound();
  }

  return (
    <main>
      {typeof banner === "string" && banner.trim() !== "" ? (
        <div className="banner pb-5">
          <Image
            alt="Banner"
            src={`${BASEURL}/${banner}`}
            width={600}
            height={600}
            className="w-full h-full"
          />
        </div>
      ) : (
        ""
      )}
      <ProductFilters
        slug={slug}
        initialProducts={initialProducts}
        categories={categories}
      />
    </main>
  );
}

export default CategoryPage;
