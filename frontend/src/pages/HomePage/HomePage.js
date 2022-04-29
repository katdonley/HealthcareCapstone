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
        let response = await axios.get("http://127.0.0.1:8000/api/patients/all/", {
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
      
      <Link to="/providerschedule">View Calendar</Link>
      <div>
        <Link to={`/addpatient`}>Add Patient</Link>
      </div>
      
      <h2>Patient List: </h2>


      {patients &&
        patients.map((patient) => (
          <p key={patient.id}>
            {patient.first_name} {patient.last_name + ": " + patient.diagnoses} 
          </p>
        ))}
    </div>
  );
};

export default HomePage;
