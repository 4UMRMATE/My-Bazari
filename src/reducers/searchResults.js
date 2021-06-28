export default (displayResults = false, action) => {
  switch (action.type) {
    case "DISPLAY_RESULTS":
      return action.payload;
    default:
      return displayResults;
  }
};
