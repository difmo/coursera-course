import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import Onlinetraining from "./components/MedicalCoding/Onlinetraining";
import ClassroomTrain from "./components/MedicalCoding/ClassroomTrain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          <Route path="Onlinetraining" element={<Onlinetraining />} />
          <Route path="ClassroomTrain" element={<ClassroomTrain />} />
          <Route path="ClassroomTrain" element={<ClassroomTrain />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
