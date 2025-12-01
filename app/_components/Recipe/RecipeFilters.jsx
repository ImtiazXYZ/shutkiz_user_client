"use client";
import { useState } from "react";
import AllRecipes from "../../_components/Recipe/AllRecipes";
import LeftMenu from "../../_components/Recipe/LeftMenu"; // Keep it separate
import getFilteredRecipes from "../../_lib/recipe/getFilteredRecipes";
import { useRouter } from 'next/navigation';
import CustomSkleton from "../Common/CustomSkeleton"


function RecipeFilters({ initialRecipes, categories }) {
  const router = useRouter();
  const [recipes, setRecipes] = useState(initialRecipes);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (categoryIds, page) => {
    setLoading(true);
    const categoryIdsString = categoryIds.join(",") || "";
    const filteredData = await getFilteredRecipes(categoryIdsString, page);
    setRecipes(filteredData);
    setLoading(false);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategories((prev) => {
      const updated = prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId];
      fetchRecipes(updated, 1); // Reset to the first page
      setCurrentPage(1);
      return updated;
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchRecipes(selectedCategories, page);
    router.push(`?keyword=${keyword}&page=${page}`);
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
            <CustomSkleton/>
            :
            <div className="w-full">
                <AllRecipes 
            recipes={recipes} 
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
