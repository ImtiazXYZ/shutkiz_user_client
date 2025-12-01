import { Pagination as AntPagination } from "antd";
import Product from "../../_components/Product";
import getProductJoinPrice from "../../_lib/helpers/getProductJoinPrice";
function SearchProducts({ searchResult, currentPage, onPageChange, keyword }) {
  // Default values to avoid destructuring errors
  const {
    last_page: totalPages = 0,
    data: recipeData = [],
    total = 0,
  } = searchResult || {};

  return (
    <>
      <div>
        {recipeData.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {recipeData.map((product, index) => {
              const stocks = product.stocks;
              const priceDisplay = getProductJoinPrice(stocks);

              return (
                <Product
                  key={index}
                  img={product.thumbnail}
                  name={product.name}
                  category={product.subcategory.name}
                  price={priceDisplay} // Use the determined price display
                  url={`/product/${product?.slug}`}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center mt-4">
            <p>No products found for {keyword}</p>
          </div>
        )}
      </div>

      {recipeData.length > 0 && totalPages > 1 && (
        <div className="pt-14">
          <AntPagination
            current={currentPage}
            total={total}
            pageSize={20} // Adjust according to your backend pagination logic
            onChange={onPageChange}
            align="center"
          />
        </div>
      )}
    </>
  );
}

export default SearchProducts;
