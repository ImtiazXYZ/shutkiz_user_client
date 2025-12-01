"use client";
import { Pagination as AntPagination, Empty } from "antd";
import Product from "../../_components/Product";
import getProductJoinPrice from "../../_lib/helpers/getProductJoinPrice";
function AllRecipes({ recipes, currentPage, onPageChange }) {
  const { last_page: totalPages, data: recipeData, total } = recipes;

  return (
    <main>
      {recipeData && recipeData.length > 0 ? (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {recipeData &&
              recipeData.map((recipe, index) => {
                const stocks = recipe.stocks;
                const priceDisplay = getProductJoinPrice(stocks, recipe?.type);

                return (
                  <Product
                    key={index}
                    img={recipe.thumbnail}
                    name={recipe.name}
                    category={recipe.subcategory.name}
                    price={priceDisplay} // Use the determined price display
                    url={`/product/${recipe?.slug}`}
                  />
                );
              })}
          </div>
          {recipeData.length > 0 && totalPages > 1 && (
            <div className="pt-14">
              <AntPagination
                current={currentPage}
                total={total}
                pageSize={6} // Adjust according to your backend pagination logic
                onChange={onPageChange}
                align="center"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="w-full">
          <Empty />
        </div>
      )}
    </main>
  );
}

export default AllRecipes;
