import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import ProductMain from "./components/Products/Product/Main";
import Profile from "./components/Profile/Profile";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div
        className="App"
        style={{
          height: "100vh",
          minWidth: "100%",
        }}
      >
        <NavBar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/product/:id" exact component={ProductMain} />
          <Route path="/profile/:id" exact component={Profile} />
          <Route path="/auth" exact component={Auth} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
