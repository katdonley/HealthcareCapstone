import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
// import api_key from '../../local_settings'
import GoalOneButton from "../../components/GoalsButtons/GoalOneButton";
import GoalTwoButton from "../../components/GoalsButtons/GoalTwoButton";
import GoalThreeButton from "../../components/GoalsButtons/GoalThreeButton";
import ClockInOut from "../../components/ClockInOut/ClockInOut";





const ViewPatientsPage = (props) =>{
   const [user, token] = useAuth();
   const [patientInfo, setPatientInfo] = useState([]);
   const [visitInfo, setVisitInfo] = useState([]);
   const [addressInfo, setAddressInfo] = useState([]);
   const [noteInfo, setNoteInfo] = useState([]);
   const {patientId} = useParams();



   useEffect(()=>{
    displayPatientInfo(patientInfo)
}, []);

    useEffect(()=>{
    displayVisitInfo(visitInfo)
}, []);

    useEffect(()=>{
    displayAddressInfo(addressInfo)
}, []);

useEffect(()=>{
    displayNoteInfo(noteInfo)
}, []);

// GET PATIENT INFO BY PATIENT ID
   async function getPatientInfo(){
        let response = await axios.get(`http://127.0.0.1:8000/api/patients/${patientId}/`, {headers:{authorization:"Bearer " + token}});
        console.log(response.data)
        setPatientInfo(response.data)
   }
// GET VISIT INFO BY PATIENT ID
   async function getVisitInfo(){
       let response = await axios.get(`http://127.0.0.1:8000/api/visits/get/${patientId}/`, {headers:{authorization:"Bearer " + token}});
       console.log(response.data)
       setVisitInfo(response.data)
   }
// GET ADDRESS INFO BY PATIENT ID
   async function getAddressInfo(){
    let response = await axios.get(`http://127.0.0.1:8000/api/addresses/getaddress/${patientId}/`, {headers:{authorization:"Bearer " + token}});
    console.log(response.data)
    setAddressInfo(response.data)
   }
// GET NOTE INFO BY VISIT ID
    async function getNoteInfo(){
        // let visitId = visitInfo.id
        let response = await axios.get(`http://127.0.0.1:8000/api/notes/getnote/${patientId}/`, {headers:{authorization:"Bearer " + token}});
        console.log(response.data)
        setNoteInfo(response.data)
    }

    function displayNoteInfo(noteInfo){
        setNoteInfo(noteInfo)
        getNoteInfo(noteInfo)
    }

   function displayVisitInfo(visitInfo){
       setVisitInfo(visitInfo)
       getVisitInfo(visitInfo)
   }

   function displayPatientInfo(patientId){
       setPatientInfo(patientId);
       getPatientInfo(patientId)
   }

   function displayAddressInfo (addressInfo){
       setAddressInfo(addressInfo)
       console.log(addressInfo)
       getAddressInfo(addressInfo)
   }

   return (
       <div>
           <div className="container">
               <h3>Clock In</h3>
               <ClockInOut message="Clock In"/>
           </div>
       <div className="container">
           <h2>Patient Info:</h2>
       </div>
       
       <div>
           <table class="center">
               <tbody>
                   <tr>{patientInfo.first_name + " "+ patientInfo.last_name}</tr>
                   <tr>{patientInfo.age + ", " + patientInfo.sex}</tr>
                   <tr>{patientInfo.guardian_name + ", " + patientInfo.guardian_relationship}</tr>
                   <tr>{patientInfo.primary_number}</tr>
                    <tr>{patientInfo.address}</tr>
                   <tr>{patientInfo.diagnoses}</tr>
                   <tr>{patientInfo.needs_pt}</tr>
                   <tr>Notes Due For Recerification: {patientInfo.recertification_date}</tr>
                   {/* <tr>{visitInfo.visit.was_attended}</tr> */}
                   <tr>{visitInfo.makeup_needed}</tr>
                   <tr>{patientInfo.summary_of_care_notes}</tr>
                   <tr>{patientInfo.visits}</tr>
                   <tr>{visitInfo.was_attended}</tr>
                   <tr>Notes From Today's Visit: {noteInfo.note}</tr>
                   

               </tbody>
           </table>
        <div className="container">
            <br/>
            <h2>Patient Goals: </h2>
            <h4>Goal One</h4>
            <GoalOneButton message="complete" />
            <h4>Goal Two</h4>
            <GoalTwoButton message="complete" />
            <h4>Goal Three</h4>
            <GoalThreeButton message="complete" />
            <br/>
            
        </div>
       </div>
       </div>
   );

   

}
    
export default ViewPatientsPage


// function showBooleans (patientInfo){
//     if (patientInfo.needs_pt === True){
//         print("Needs PT")
//     }
//     else
// }