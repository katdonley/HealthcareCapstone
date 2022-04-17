import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import axios from 'axios'
import { Link, useNavigate, Routes, Route, useParams } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

//Plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import AddVisitPage from '../../pages/AddVisitPage/AddVisitPage'
import ViewPatientsPage from '../../pages/ViewPatientsPage/ViewPatientsPage'
// import ViewPatientsPage from '../../pages/ViewPatientsPage/ViewPatientsPage'
import PrivateRoute from '../../utils/PrivateRoute'

const ProviderSchedule = (props) => {
    const [user, token] = useAuth();
    // const [newVisit, setNewVisit] = useState('')
    const [visits, setVisits] = useState([]);
    const [resources, setResources] = useState([]);
    const {newVisit} = useParams();
    const [currentProviderId, setCurrentProviderId] = useState([]);
    const navigate = useNavigate();

    async function getVisits(){
        let response = await axios.get("http://127.0.0.1:8000/api/visits/all/visits/", {headers:{authorization:"Bearer " + token}});
        console.log(response.data)
        buildEvents(response.data)
    
    }

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
    
    return (
        <div>
            <div>
            <Link to="/addvisit">Add Visit</Link>
            </div>
            
            <div>

            <FullCalendar 
            // changeCurrentProvider = {changeCurrentProvider}
            plugins={[ resourceTimelinePlugin, interactionPlugin,  ]}
            editable= 'True'
            initialView='resourceTimelineWeek'
            dateClick={ (info) => {
                alert('Clicked on: ' + info.dateStr);
                alert('Resource ID: ' + info.resource.title);
                
            } }
            resourceAreaHeaderContent= 'Patients'
            resources={resources}
            events={visits}
            eventColor='#378006'
            eventClick={(info) => navigate(`/patients/${info.event._def.resourceIds}/`)}
            />
            </div>
            <div>
                <Routes>
                
                </Routes>
                
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
