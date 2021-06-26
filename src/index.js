import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunck from "redux-thunk";
import reducers from "./reducers";
import { CssBaseline } from "@material-ui/core";

import App from "./App";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunck),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById("root")
);
