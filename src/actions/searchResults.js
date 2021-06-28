export const hideResults = (state) => (dispatch) => {
  dispatch({ type: "HIDE_RESULTS", payload: state });
};

export const inputProduct = (state) => (dispatch) => {
  dispatch({ type: "SET_SEARCH_INPUT", payload: state });
};
