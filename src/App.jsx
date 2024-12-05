import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import Onlinetraining from "./components/MedicalCoding/Onlinetraining";
import ClassroomTrain from "./components/MedicalCoding/ClassroomTrain";
import Classcodingpages from "./components/Classcodingpages";
import DataScienceBlog from "./components/Blogs/BlogsPage/Datascience";
import BigData from "./components/Blogs/BlogsPage/BigData";
import CloudComputing from "./components/Blogs/BlogsPage/CloudComputing";
import MachineLearning from "./components/Blogs/BlogsPage/MachineLearning";
import Cybersecurity from "./components/Blogs/BlogsPage/Cybersecurity";
function App() {
  return (
    <Router>
      <Routes>
        {/* Layout is the parent route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Onlinetraining" element={<Onlinetraining />} />
          <Route path="ClassroomTrain" element={<ClassroomTrain />} />
          <Route path="Classcodingpages" element={<Classcodingpages />} />
          <Route path="DataScienceBlog" element={<DataScienceBlog />} />
          <Route path="BigData" element={<BigData />} />
          <Route path="CloudComputing" element={<CloudComputing />} />
          <Route path="MachineLearning" element={<MachineLearning />} />
          <Route path="Cybersecurity" element={<Cybersecurity />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
