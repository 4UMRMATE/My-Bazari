const initialState = {
  isHidden: true,
  input: "",
};

export default (searchResults = initialState, action) => {
  switch (action.type) {
    case "HIDE_RESULTS":
      return { ...searchResults, isHidden: action.payload };
    case "SET_SEARCH_INPUT":
      return { ...searchResults, input: action.payload };
    default:
      return searchResults;
  }
};
