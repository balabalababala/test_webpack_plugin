import React from "react";
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";
// import Home from "./home";
import App from "../views/app";
import Home from "../views/home";
import Demo from "../views/demo";

const BasicRoute = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home" exact component={Home}></Route>
        <Route path="/app" component={App}></Route>
        <Route path="/demo" component={Demo}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

export default BasicRoute;
