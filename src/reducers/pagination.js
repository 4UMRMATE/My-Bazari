const initialState = {
  total: 0,
  page: 1,
  pages: 1,
  limit: 0,
};

export default (pagination = initialState, action) => {
  switch (action.type) {
    case "FETCH_PAGINATION":
      return action.payload;
    case "CHANGE_PAGE":
      return { ...pagination, page: action.payload };
    default:
      return pagination;
  }
};
