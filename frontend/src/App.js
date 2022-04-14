// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, {useState, useEffect, Component} from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddPatientPage from "./pages/AddPatientPage/AddPatientPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProviderSchedule from "./components/ProviderSchedule/ProviderSchedule";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
// import ViewPatientsPage from "./pages/ViewPatientsPage/ViewPatientsPage";

function App() {

  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
        path="/addpatient" 
        element={
          <PrivateRoute>
            <AddPatientPage />
          </PrivateRoute>
        }
        />
        <Route 
        path="/providerschedule" 
        element={
          <PrivateRoute>
            <ProviderSchedule />
          </PrivateRoute>
        }
        />
        {/* <Route 
        path="/viewpatients" 
        element={
          <PrivateRoute>
            <ViewPatientsPage patientList = {ViewPatientsPage}/>
          </PrivateRoute>
        }
        /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
