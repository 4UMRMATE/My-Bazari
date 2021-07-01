import * as api from "../api";

export const getProducts = (name, page) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const { data } = await api.fetchProducts(name, page);

    await Promise.all([
      dispatch({ type: "FETCH_PRODUCTS", payload: data.data }),
      dispatch({ type: "FETCH_PAGINATION", payload: data.meta.pagination }),
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const { data } = await api.fetchProduct(id);

    dispatch({ type: "FETCH_PRODUCT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.addProduct(product);

    dispatch({ type: "ADD_PRODUCT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
