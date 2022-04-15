import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

//Plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import AddVisitPage from '../../pages/AddVisitPage/AddVisitPage'
// import ViewPatientsPage from '../../pages/ViewPatientsPage/ViewPatientsPage'


const ProviderSchedule = (props) => {
    const [user, token] = useAuth();

    const [visits, setVisits] = useState([]);
    const [resources, setResources] = useState([]);
    // const [patientList, setPatientList] = useState([]);
    const [currentProviderId, setCurrentProviderId] = useState([]);
    const navigate = useNavigate();

    async function getVisits(){
        let response = await axios.get("http://127.0.0.1:8000/api/visits/all/visits/", {headers:{authorization:"Bearer " + token}});
        console.log(response.data)
        buildEvents(response.data)
    
    }

    // async function getNewVisit(){
    //     let response = await axios.get("http://127.0.0.1:8000/api/visits/", {headers:{authorization:"Bearer " + token}});
    //     console.log(response.data)
    //     buildEvents(response.data)
    
    // }

    function buildEvents(eventsData){
        let resources = []
        let visits = []
        eventsData.map((el, i) =>{
            console.log(el)
            visits.push ({id: i, resourceId: el.patient.id, start: el.start, end: el.end, title: el.patient.first_name})
            resources.push({id: el.id, title:[el.patient.first_name + " " + el.patient.last_name]})
        })
        console.log(visits)
        console.log(resources)
        setVisits(visits)
        setResources(resources)
    }

    useEffect(()=>{
        getVisits(currentProviderId)
    }, []);

    // useEffect(()=>{
    //     getNewVisit(currentProviderId)
    // }, []);
    
    // const handleClick = (event, id, resourceId, start, end, title) => {
    //     // using the info to pass data from the event when clicked
    //     // info.event._def.resourceIds[0] is the patientId
    //     // can use that to route to a different page in React Router
    //     // and fetch the patient's information from your database
    //     // also Google Maps stuff
        
    //     event.preventDefault();
    //     props.setCurrentVisitId(id);
    //     props.setCurrentResourceId(resourceId);
    //     props.setCurrentStart(start);
    //     props.setCurrentEnd(end);
    //     props.setCurrentTitle(title);
    //     console.log(id, resourceId, start, end, title)
    //     navigate(`/patients/${info.event._def.resourceIds}`)

        

    // }
    
    return (
        <div>
            
            <div>
            <FullCalendar 
            // changeCurrentProvider = {changeCurrentProvider}
            
            
            plugins={[ resourceTimelinePlugin, interactionPlugin,  ]}
            editable= 'True'
            initialView='resourceTimelineWeek'
            dateClick={ (info) => {
                alert('Clicked on: ' + info.dateStr);
                alert('Resource ID: ' + info.resource.title);
                // <button onClick={({visits}>f'{resources.title}See visit</button>
                // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
                // alert('Current view: ' + info.view.type);
                // info.dayEl.style.backgroundColor = 'green'; 
            } }
         
            resourceAreaHeaderContent= 'Patients'
            resources={resources}
            events={visits}
            eventColor='#378006'
            eventClick={(info) => navigate(`/patients/${info.event._def.resourceIds}/`)}
            
            />
            
            </div>
        </div>
    )
}


export default ProviderSchedule


// function changeCurrentProvider (provider_id){
    //     setCurrentProviderId(provider_id)
    //     console.log(provider_id)
    //     getVisits(provider_id)
    // }


// function getPatientInfo(patient_id){
    //     setPatientInfo(patient_id)
    //     console.log(patient_id)
    //     let results = patient.map(function(el){
    //         return el.patient_id;
    //     })
    //     return results;
    // }


    {/* <div>
                <button onClick={visits}>f'{resources.title}See visit</button>
            </div> */}
            {/* <AddVisitPage /> */}
