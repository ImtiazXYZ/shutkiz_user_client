"use client";
import { useState } from "react";
import AllProduct from "../../_components/Category/AllProducts";
import LeftMenu from "../../_components/Recipe/LeftMenu"; // Keep it separate
import getFilteredRecipes from "../../_lib/recipe/getFilteredRecipes";
import { useRouter } from 'next/navigation';
import CustomProductSkeleton from "../Common/CustomProductSkeleton"
import getFilteredProduct from "../../_lib/product/getFilteredProduct";


function RecipeFilters({slug, initialProducts, categories }) {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (categoryIds, page) => {
    setLoading(true);
    const categoryIdsString = categoryIds.join(",") || "";
    const filteredData = await getFilteredProduct(slug,categoryIdsString, page);
    setProducts(filteredData);
    setLoading(false);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategories((prev) => {
      const updated = prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId];
    fetchProducts(updated, 1); // Reset to the first page
      setCurrentPage(1);
      return updated;
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchProducts(selectedCategories, page);
    //router.push(`?page=${page}`);
  };

  return (
    <div>
      
        <div className="md:flex md:gap-x-5 md:pt-5 pb-10">
          <LeftMenu 
            categories={categories} 
            handleCategoryClick={handleCategoryClick} 
            selectedCategories={selectedCategories} 
          />
          {
            loading?
            <CustomProductSkeleton/>
            :
            <div className="w-full">
                <AllProduct 
            recipes={products} 
            currentPage={currentPage} 
            onPageChange={handlePageChange} 
          />
            </div>
          }
        </div>
      
    </div>
  );
}

export default RecipeFilters;
