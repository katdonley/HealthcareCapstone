import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

//Plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
// import ViewPatientsPage from '../../pages/ViewPatientsPage/ViewPatientsPage'


const ProviderSchedule = (props) => {
    const [user, token] = useAuth();
    const [patientInfo, setPatientInfo] = useState([]);
    const [visits, setVisits] = useState([]);
    const [resources, setResources] = useState([]);
    const [patientList, setPatientList] = useState([]);
    const [currentProviderId, setCurrentProviderId] = useState([]);

    async function getVisits(){
        let response = await axios.get("http://127.0.0.1:8000/api/visits/all/visits/", {headers:{authorization:"Bearer " + token}});
        console.log(response.data)
        buildEvents(response.data)
    
    }
    function buildEvents(eventsData){
        let resources = []
        let visits = []
        eventsData.map((el, i) =>{
            visits.push ({id: i, resourceId: el.id, start: el.start, end: el.end, title: el.patient.first_name})
            resources.push({id: el.id, title:el.patient.first_name})
        })
        console.log(visits)
        console.log(resources)
        setVisits(visits)
        setResources(resources)
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
            resources={resources}
            
            events={visits}
            />
            </div>
        </div>
    )
}


export default ProviderSchedule