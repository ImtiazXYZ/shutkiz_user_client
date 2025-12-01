import React from 'react'
import Recipe from "../../_components/Recipe";
import recipeBannerRecipes from "../../_lib/home/recipeBannerRecipes"
async function RecipeBannerItems() {
    const recipes = await recipeBannerRecipes();
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
      {
        recipes.map((recipe,index)=>(
            <div key={index}>
                <Recipe img={recipe.thumbnail} name={recipe.title} url={`/recipe/${recipe.id}`}/>
            </div>
        ))
      }
    </div>
  )
}

export default RecipeBannerItems
