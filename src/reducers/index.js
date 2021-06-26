import { combineReducers } from "redux";

import products from "./products";
import product from "./product";
import loading from "./loading";
import auth from "./auth";
import profile from "./profile";

export default combineReducers({
  products: products,
  product: product,
  loading: loading,
  auth: auth,
  profile: profile,
});
