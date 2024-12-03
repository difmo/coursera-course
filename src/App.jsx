import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import Onlinetraining from "./components/MedicalCoding/Onlinetraining";
import MedicalCoding from "./components/ReadMorePages/Medicalcoding";
import Australiancoding from "./components/ReadMorePages/Australiancoding";
import Medicalbilling from "./components/ReadMorePages/Medicalbilling";
import Medicalcalling from "./components/ReadMorePages/Medicalcalling";
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
          {/*  */}
          <Route path="MedicalCoding" element={<MedicalCoding />} />
          <Route path="Australiancoding" element={<Australiancoding />} />
          <Route path="Medicalbilling" element={<Medicalbilling />} />
          <Route path="Medicalcalling" element={<Medicalcalling />} />
          {/*  */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
