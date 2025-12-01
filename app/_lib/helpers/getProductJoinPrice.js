// export default function getProductJoinPrice(stocks) {
//   if (stocks.length === 1) {
//     return stocks[0].is_discount == 1
//       ? stocks[0].discount_price
//       : stocks[0].regular_price;
//   } else if (stocks.length > 1) {
//     const firstPrice =
//       stocks[0].is_discount == 1
//         ? stocks[0].discount_price
//         : stocks[0].regular_price;
//     const lastPrice =
//       stocks[stocks.length - 1].is_discount == 1
//         ? stocks[stocks.length - 1].discount_price
//         : stocks[stocks.length - 1].regular_price;
//     return `${firstPrice} - ${lastPrice}`;
//   } else {
//     return "Price Unavailable";
//   }
// }

// stocks[stocks.length - 1].regular_price

//new function
export default function getProductJoinPrice(stocks, type = "variable") {
  if (!stocks || stocks.length === 0) return "Price Unavailable";

  // Single stock
  if (stocks.length === 1) {
    const stock = stocks[0];
    if (stock.is_discount == 1) {
      return (
        <>
          <span>{stock.discount_price}</span> <del>{stock.regular_price}</del>
        </>
      );
    } else {
      return <span>{stock.regular_price}</span>;
    }
  }

  // Multiple stocks
  if (type === "simple") {
    const lastStock = stocks[stocks.length - 1];
    if (lastStock.is_discount == 1) {
      return (
        <>
          <span>{lastStock.discount_price}</span>{" "}
          <del style={{ color: "gray" }}>{lastStock.regular_price}</del>
        </>
      );
    } else {
      return <span>{lastStock.regular_price}</span>;
    }
  } else {
    const firstStock = stocks[0];
    const lastStock = stocks[stocks.length - 1];

    const firstPrice =
      firstStock.is_discount == 1
        ? firstStock.discount_price
        : firstStock.regular_price;

    const lastPrice =
      lastStock.is_discount == 1
        ? lastStock.discount_price
        : lastStock.regular_price;

    return (
      <span>
        {firstPrice} - {lastPrice}
      </span>
    );
  }
}
