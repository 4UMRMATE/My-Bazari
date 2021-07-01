import { combineReducers } from "redux";

import products from "./products";
import pagination from "./pagination";
import product from "./product";
import loading from "./loading";
import auth from "./auth";
import profile from "./profile";
import searchResults from "./searchResults";

export default combineReducers({
  products,
  pagination,
  product,
  loading,
  auth,
  profile,
  searchResults,
});
