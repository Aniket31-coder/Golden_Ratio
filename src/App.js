import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Home from "./components/screens/Home";
import Design from "./components/screens/Design";
import Architecture from "./components/screens/Architecture";
import Nature from "./components/screens/Nature";
import About from "./components/screens/About";
import Navbar from "./components/Navbar";
import Human from "./components/screens/Human";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/design">
        <Design />
      </Route>
      <Route path="/nature">
        <Nature />
      </Route>
      <Route path="/architecture">
        <Architecture />
      </Route>
      <Route path="/human">
        <Human />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
