export default (products = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return action.payload;
    case "ADD_PRODUCT":
      return [...products, action.payload];
    default:
      return products;
  }
};
