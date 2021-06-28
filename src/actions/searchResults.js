export const displayResults = (state) => (dispatch) => {
  dispatch({ type: "DISPLAY_RESULTS", payload: state });
};
