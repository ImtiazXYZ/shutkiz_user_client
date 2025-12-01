// ...existing code...
import getAllBlogs from "../_lib/blog/getAllBlogs";
import getCategoryProducts from "../_lib/home/getCategoryProducts";
import {
  getAllNewArrivalProducts,
  getNavbarCategories,
} from "../_lib/home/product";
import getProductsSubcategories from "../_lib/product/getProductsSubcategories";
import getAllRecipes from "../_lib/recipe/getAllRecipes";

export async function GET() {
  const baseUrl = "https://www.shutkiz.com";
  const locales = ["en", "bn"];

  // static routes to include in sitemap
  const staticPaths = [
    "",
    "blog",
    "recipe",
    "category/premium-dry-fish",
    "category/raw-fish",
    "investment",
    "privacy-policy",
    "contact-us",
    "about-us",
  ];

  const urls = [];

  // helpers
  function normalizeArray(res) {
    if (!res) return [];
    if (Array.isArray(res)) return res;
    if (res.data && Array.isArray(res.data)) return res.data;
    if (res.results && Array.isArray(res.results)) return res.results;
    // some endpoints return { items: [] } or other shapes - check common keys
    if (res.items && Array.isArray(res.items)) return res.items;
    if (res.blogs && Array.isArray(res.blogs)) return res.blogs;
    return [];
  }

  function pushLocalized(path, lastmod = null) {
    locales.forEach((locale) => {
      const loc = `${baseUrl}/${locale}${
        path.startsWith("/") ? path : "/" + path
      }`;
      urls.push(createUrlEntry(loc, lastmod));
    });
  }

  // add static pages for each locale
  locales.forEach((locale) => {
    staticPaths.forEach((p) => {
      const path = p ? `/${p}` : "";
      const loc = `${baseUrl}/${locale}${path}`;
      urls.push(createUrlEntry(loc));
    });
  });

  // dynamic: blogs
  try {
    const blogsRaw = (await getAllBlogs()) || [];
    const blogs = normalizeArray(blogsRaw);
    blogs.forEach((blog) => {
      const slug = blog?.slug || blog?.id || blog?.uuid;
      if (!slug) return;
      const lastmod =
        blog?.updated_at || blog?.updatedAt || blog?.updated || null;
      pushLocalized(`/blog/${encodeURIComponent(String(slug))}`, lastmod);
    });
  } catch (err) {
    console.error("sitemap: failed to fetch blogs:", err);
  }

  // dynamic: recipes
  try {
    const recipesRaw = (await getAllRecipes(1)) || [];
    const recipes = normalizeArray(recipesRaw);
    recipes.forEach((recipe) => {
      const slug = recipe?.slug || recipe?.id || recipe?.uuid;
      if (!slug) return;
      const lastmod = recipe?.updated_at || recipe?.updatedAt || null;
      pushLocalized(`/recipe/${encodeURIComponent(String(slug))}`, lastmod);
    });
  } catch (err) {
    console.error("sitemap: failed to fetch recipes:", err);
  }

  // dynamic: categories, subcategories and products within categories
  try {
    const categoriesRaw = (await getNavbarCategories()) || [];
    const categories = normalizeArray(categoriesRaw);

    for (const cat of categories) {
      const catSlug = cat?.slug || cat?.id || cat?.name;
      if (!catSlug) continue;

      // category page
      pushLocalized(
        `/category/${encodeURIComponent(String(catSlug))}`,
        cat?.updated_at || cat?.updatedAt || null
      );

      // subcategories
      try {
        const subsRaw = (await getProductsSubcategories(catSlug)) || [];
        const subs = normalizeArray(subsRaw);
        subs.forEach((sub) => {
          const subSlug = sub?.slug || sub?.id || sub?.name;
          if (!subSlug) return;
          pushLocalized(
            `/category/${encodeURIComponent(String(subSlug))}`,
            sub?.updated_at || sub?.updatedAt || null
          );
        });
      } catch (e) {
        // non-fatal
        console.error(
          `sitemap: failed to fetch subcategories for ${catSlug}:`,
          e
        );
      }

      // products for this category
      try {
        const prodsRaw = (await getCategoryProducts(catSlug)) || [];
        const prods = normalizeArray(prodsRaw);
        prods.forEach((prod) => {
          const prodSlug = prod?.slug || prod?.id || prod?.product_slug;
          if (!prodSlug) return;
          const lastmod = prod?.updated_at || prod?.updatedAt || null;
          pushLocalized(
            `/product/${encodeURIComponent(String(prodSlug))}`,
            lastmod
          );
        });
      } catch (e) {
        console.error(`sitemap: failed to fetch products for ${catSlug}:`, e);
      }
    }

    // additionally include a page of new arrivals (some products may only be reachable here)
    try {
      const newArrRaw = (await getAllNewArrivalProducts(1)) || [];
      const newArr = normalizeArray(newArrRaw);
      newArr.forEach((prod) => {
        const prodSlug = prod?.slug || prod?.id || prod?.product_slug;
        if (!prodSlug) return;
        const lastmod = prod?.updated_at || prod?.updatedAt || null;
        pushLocalized(
          `/product/${encodeURIComponent(String(prodSlug))}`,
          lastmod
        );
      });
    } catch (e) {
      console.error("sitemap: failed to fetch new-arrival products:", e);
    }
  } catch (err) {
    console.error("sitemap: failed to fetch categories:", err);
  }

  const sitemap = buildSitemap(urls);

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}

// helpers
function createUrlEntry(loc, lastmod = null) {
  const lastmodTag = lastmod
    ? `<lastmod>${new Date(lastmod).toISOString()}</lastmod>`
    : `<lastmod>${new Date().toISOString()}</lastmod>`;
  return `
    <url>
      <loc>${loc}</loc>
      ${lastmodTag}
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
  `;
}

function buildSitemap(entries) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${entries.join("\n")}
  </urlset>`;
}
// ...existing code...
