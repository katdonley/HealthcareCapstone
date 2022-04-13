import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/patients/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPatients(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPatients();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <Link to="/addpatient">Add Patient</Link>

      {patients &&
        patients.map((patient) => (
          <p key={patient.id}>
            {patient.firstName} {patient.lastName} {patient.age} {patient.sex} {patient.guardianName} {patient.guardianRelationship} {patient.primaryNumber} {patient.address} {patient.diagnoses} {patient.servicesNeeded} {patient.recertificationDate} {patient.summaryOfCareNotes} {patient.visits} 
          </p>
        ))}
    </div>
  );
};

export default HomePage;
