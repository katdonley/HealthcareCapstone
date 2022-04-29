// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, {useState, useEffect, Component} from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddPatientPage from "./pages/AddPatientPage/AddPatientPage";
import ViewPatientsPage from "./pages/ViewPatientsPage/ViewPatientsPage";
import AddVisitPage from "./pages/AddVisitPage/AddVisitPage";
import AddNotePage from "./pages/AddNotePage/AddNotePage";
import UpdatePatientPage from "./pages/UpdatePatientPage/UpdatePatientPage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProviderSchedule from "./components/ProviderSchedule/ProviderSchedule";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";



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
        <Route 
        path="/patients/:patientId" 
        element={
          <PrivateRoute>
            <ViewPatientsPage />
          </PrivateRoute>
        }
        />
        <Route 
        path="/patient/:patientId" 
        element={
          <PrivateRoute>
            <UpdatePatientPage />
          </PrivateRoute>
        }
        />
        <Route 
        path="/addvisit/:patientId" 
        element={
        <PrivateRoute>
            <AddVisitPage />
        </PrivateRoute>
        }
        />
        <Route 
        path="/getnote/:patientId" 
        element={
          <PrivateRoute>
            <AddNotePage />
          </PrivateRoute>
        }
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
