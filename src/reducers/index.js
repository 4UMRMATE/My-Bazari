import { combineReducers } from "redux";

import products from "./products";
import product from "./product";
import loading from "./loading";
import auth from "./auth";
import profile from "./profile";
import resultsDisplay from "./searchResults";

export default combineReducers({
  products: products,
  product: product,
  loading: loading,
  auth: auth,
  profile: profile,
  resultsDisplay: resultsDisplay,
});
