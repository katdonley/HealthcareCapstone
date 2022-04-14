import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

//Plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
// import ViewPatientsPage from '../../pages/ViewPatientsPage/ViewPatientsPage'


const ProviderSchedule = (props) => {
    const [user, token] = useAuth();
    const [patientInfo, setPatientInfo] = useState([]);
    const [visits, setVisits] = useState([]);
    const [patientList, setPatientList] = useState([]);
    const [currentProviderId, setCurrentProviderId] = useState([]);

    async function getVisits(){
        let response = await axios.get("http://127.0.0.1:8000/api/visits/all/visits/");
        console.log(response.data.items)
    
        setVisits(response.data.items)
    }

    useEffect(()=>{
        getVisits(currentProviderId)
    }, []);

    function changeCurrentProvider (provider_id){
        setCurrentProviderId(provider_id)
        console.log(provider_id)
        getVisits(provider_id)
    }

    // function getPatientInfo(patient_id){
    //     setPatientInfo(patient_id)
    //     console.log(patient_id)
    //     let results = patient.map(function(el){
    //         return el.patient_id;
    //     })
    //     return results;
    // }
    //let patientInfo = getPatientInfo()
    // console.log(patientInfo)

    return (
        <div>
            {/* <div>
                <ViewPatientsPage />
            </div> */}
            <div>
            <FullCalendar 
            changeCurrentProvider = {changeCurrentProvider}
            // schedulerLicenseKey=''
            plugins={[ resourceTimelinePlugin ]}
            // eventContent={renderEventContent}
            initialView='resourceTimeline'
            resources={[
                {id: visits.patient.id, title: visits.patient.first_name, eventColor:'green'} 
            ]}
            
            events={[
                {id: visits.id, resourceId: visits.patient.id, start: '2022-04-01T02:00:00', end: '2022-04-01T02:30:00', title: visits.patient.first_name},
                // {title: 'event 2', date: '2022-04-05'}
            ]}
            />
            </div>
        </div>
    )
}


export default ProviderSchedule