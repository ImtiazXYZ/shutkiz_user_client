import { getNewArrivalProducts } from "../../_lib/home/product";
import AllProductSlider from "../Home/AllProductSlider";
async function NewArrivalProducts({ title, url }) {
  const products = await getNewArrivalProducts();
  return (
    <div>
      <AllProductSlider title={title} products={products} url={url} />
    </div>
  );
}

export default NewArrivalProducts;
