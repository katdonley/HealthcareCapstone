import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'


const ViewPatientsPage = (props) =>{
//    const handleClick = (event, id, [provider_id], first_name, last_name, age, sex, guardian_name, guardian_relationship, primary_number, address, diagnoses, needs_pt, needs_bt, needs_st, needs_ot, recertification_date, summary_of_care_notes, visits) => {
   const [user, token] = useAuth();
   const [patientInfo, setPatientInfo] = useState([]);
   const {patientId} = useParams();


   useEffect(()=>{
    displayPatientInfo(patientInfo)
}, []);

   async function getPatientInfo(){
        
        let response = await axios.get(`http://127.0.0.1:8000/api/patients/${patientId}/`, {headers:{authorization:"Bearer " + token}});
        console.log(response.data)
        // displayPatientInfo(response.data.items)
        setPatientInfo(response.data)
        

   }

//    function displayPatientInfo(patientId){
//        setPatientInfo(patientId)
//        console.log(patientId)
//        patientInfo(patientId)
//    }

   function displayPatientInfo(patientId){
    //    let patientInfo = []
    //    patientId.map((el, i) => {
    //        patientInfo.push({id: i, providerId: el.provider_id, firstName: el.first_name, lastName: el.last_name, 
    // age: el.age, sex: el.sex, guardianName: el.guardian_name, 
    // guardianRelationship: el.guardian_relationship, primaryNumber: el.primary_number, 
    // address: el.address, diagnoses: el.diagnoses, needsPt: el.needs_pt, needsBt: el.needs_bt, 
    // needsSt: el.needs_st, needsOt: el.needs_ot, recertificationDate: el.recertification_date, 
    // summaryOfCareNotes: el.summary_of_care_notes, visits: el.visits})
    //    })
    
       setPatientInfo(patientId);
       getPatientInfo(patientId)
       
   }

   return (
       <div>
       <div className="container">
           <h1>Patient Info:</h1>
           
       </div>
       <div>
           <table>
               <tbody>
                   
                   <tr>{patientInfo.first_name + " "+ patientInfo.last_name}</tr>
                   <tr>{patientInfo.age + ", " + patientInfo.sex}</tr>
                   
                   <tr>{patientInfo.guardian_name + ", " + patientInfo.guardian_relationship}</tr>
                   <tr>{patientInfo.primary_number}</tr>
                   <tr>{patientInfo.address}</tr>
                   <tr>{patientInfo.diagnoses}</tr>
                   <tr>{patientInfo.recertification_date}</tr>
                   <tr>{patientInfo.summary_of_care_notes}</tr>
                   <tr>{patientInfo.visits}</tr>
                   
                   
               </tbody>
           </table>
       </div>
       </div>
   );

   

}
    
export default ViewPatientsPage