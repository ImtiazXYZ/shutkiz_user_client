import RecipeFilters from "../../_components/Recipe/RecipeFilters";
import getAllRecipesCategories from "../../_lib/recipe/getAllRecipesCategories";
import getFilteredRecipes from "../../_lib/recipe/getFilteredRecipes";

async function Page() {
  const categories = await getAllRecipesCategories();
  const initialRecipes = await getFilteredRecipes("", 1);

  return (
    <main>
      <RecipeFilters initialRecipes={initialRecipes} categories={categories} />
    </main>
  );
}

export default Page;
