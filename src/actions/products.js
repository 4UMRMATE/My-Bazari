import * as api from "../api";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const { data } = await api.fetchProducts();

    dispatch({ type: "FETCH_ALL", payload: data });
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

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
