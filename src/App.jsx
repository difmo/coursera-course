import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* This sets up the Layout component as the wrapper for the Home route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          {/* 'index' is used for the default route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
