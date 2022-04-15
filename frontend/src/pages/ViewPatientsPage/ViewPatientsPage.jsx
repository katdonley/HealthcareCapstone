import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'


const ViewPatientsPage = (props) =>{
//    const handleClick = (event, id, [provider_id], first_name, last_name, age, sex, guardian_name, guardian_relationship, primary_number, address, diagnoses, needs_pt, needs_bt, needs_st, needs_ot, recertification_date, summary_of_care_notes, visits) => {
   const [user, token] = useAuth();
   const [patientInfo, setPatientInfo] = useState([]);
   const {patientId} = useParams();


   async function getPatientInfo(){
        
        let response = await axios.get(`http://127.0.0.1:8000/api/patients/${patientId}/`, {headers:{authorization:"Bearer " + token}});
        console.log(response.data)
        displayPatientInfo(response.data)

   }

   function displayPatientInfo(patientId){
       let patient = []
       patientInfo.map((el, i) => {
           return(
               el.patientInfo
           )
       })
       return patient;
   }

   useEffect(()=>{
       getPatientInfo()
   }, []);

}
    
export default ViewPatientsPage