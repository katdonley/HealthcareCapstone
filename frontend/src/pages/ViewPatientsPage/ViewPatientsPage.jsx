import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'
import api_key from '../../local_settings'


const ViewPatientsPage = (props) =>{
//    const handleClick = (event, id, [provider_id], first_name, last_name, age, sex, guardian_name, guardian_relationship, primary_number, address, diagnoses, needs_pt, needs_bt, needs_st, needs_ot, recertification_date, summary_of_care_notes, visits) => {
   const [user, token] = useAuth();
   const [patientInfo, setPatientInfo] = useState([]);
   const [visitInfo, setVisitInfo] = useState([]);
   const [currentAddress, setCurrentAddress] = useState([]);
   const [directions, setDirections] = useState([]);
   const [addressInfo, setAddressInfo] = useState([]);
   const {patientId} = useParams();
//    const {patientAddress} = useParams();


   useEffect(()=>{
    displayPatientInfo(patientInfo)
}, []);

    useEffect(()=>{
    displayVisitInfo(visitInfo)
}, []);

    useEffect(()=>{
    getAddressInfo(addressInfo)
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

// GET DIRECTIONS FROM GOOGLE MAPS
   async function getDirections(){
    let response = await axios.get(`https://maps.googleapis.com/maps/api/js?key=${api_key}&callback=initMap`, {headers:{authorization:"Bearer " + token}});
    console.log(response.data)
    setDirections(response.data)
    }

   function displayVisitInfo(visitInfo){
       setVisitInfo(visitInfo)
       getVisitInfo(visitInfo)
   }

   function displayPatientInfo(patientId){
       setPatientInfo(patientId);
       getPatientInfo(patientId)
   }

   function getAddressInfo (addressInfo){
       setAddressInfo(addressInfo)
       console.log(addressInfo)
       getDirections(addressInfo)
   }

   const handleClick = (event, addressInfo) => {
       event.preventDefault();
       getDirections(addressInfo)
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
                    <tr>
                        <button className={addressInfo} onClick={handleClick}>{patientInfo.address}</button>
                        </tr>
                   <tr>{patientInfo.diagnoses}</tr>
                   <tr>{patientInfo.recertification_date}</tr>
                   {/* <tr>{patientInfo.visit.was_attended}</tr> */}
                   {/* <tr>{patientInfo.makeup_needed}</tr> */}
                   <tr>{patientInfo.summary_of_care_notes}</tr>
                   <tr>{patientInfo.visits}</tr>
                   <tr>{visitInfo.was_attended}</tr>
               </tbody>
           </table>
       </div>
       </div>
   );

   

}
    
export default ViewPatientsPage