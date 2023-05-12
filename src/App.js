import "./App.css";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Search from "./Search";
import List from "./List";

import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

function getRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/search" element={<Search />} />
      <Route exact path="/list" element={<List />} />
    </Routes>
  );
}

function App() {
  const routes = getRoutes();
  return (
    <Router>
      <React.Fragment>
        <Nav />
        {routes}
      </React.Fragment>
    </Router>
  );
}

export default App;
