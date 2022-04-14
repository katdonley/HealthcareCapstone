import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

//Plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
// import ViewPatientsPage from '../../pages/ViewPatientsPage/ViewPatientsPage'




function findPatientInfo(){
    // let patient = Patient
    let results = patient.map(function(el){
        return el.patient_id;
    })
    return results;
}
let patientInfo = findPatientInfo()
console.log(patientInfo)


const ProviderSchedule = (props) => {
    const [user, token] = useAuth();
    const [patientInfo, setPatientInfo] = useState([]);
    const [visits, setVisits] = useState([]);
    const [patientList, setPatientList] = useState([]);
    const [currentProviderId, setCurrentProviderId] = useState([]);

    async function getPatientList(){
        let response = await axios.get("http://127.0.0.1:8000/api/patients/");
        console.log(response.data.items)
    
        setPatientList(response.data.items)
    }

    useEffect(()=>{
        getPatientList(currentProviderId)
    }, []);

    function changeCurrentProvider (provider_id){
        setCurrentProviderId(provider_id)
        console.log(provider_id)
        getPatientList(provider_id)
    }

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
                {id: patient.id, title: [patient.first_name, patient.last_name], eventColor:'green'} 
            ]}
            
            events={[
                {id: visits.id, resourceId: '', start: '2022-04-01T02:00:00', end: '2022-04-01T02:30:00', title: ''},
                {title: 'event 2', date: '2022-04-05'}
            ]}
            />
            </div>
        </div>
    )
}


 

    // handleDateClick = (arg) => {
    //     alert(arg.dateStr)
    // }



// function renderEventContent(eventInfo) {
//     return (
//         <>
//             <b>{eventInfo.timeText}</b>
//             <i>{eventInfo.event.title}</i>
//         </>
//     )
// }


export default ProviderSchedule