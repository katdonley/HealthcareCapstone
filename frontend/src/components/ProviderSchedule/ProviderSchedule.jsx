import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

//Plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'


const ProviderSchedule = (props) => {
    const [user, token] = useAuth();
    const [visits, setVisits] = useState([]);

    useEffect(()=>{
        const fetchVisits = async () => {
            try {
                let response = await axios.get('http://127.0.0.1:8000/api/patients/all/');
                setVisits(response.data);
            }
            catch(error){
                console.log(error.message)
            }
        }
        fetchVisits();
    }, []);

    return (
        <div>
            <div>
            <FullCalendar 
            // schedulerLicenseKey=''
            plugins={[ resourceTimelinePlugin ]}
            eventContent={renderEventContent}
            initialView='resourceTimeline'
            events={[
                {title: 'event 1', date: '2022-04-01'},
                {title: 'event 2', date: '2022-04-05'}
            ]}
            />
            </div>
        </div>
    )
}

// let dayCalendar = {
//     plugins: [ resourceTimelinePlugin ],
//     initialView: 'resourceTimeline',
//     resources: [
//         // Patient.models.visits
//     ]
// };

 

    // handleDateClick = (arg) => {
    //     alert(arg.dateStr)
    // }



function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}


export default ProviderSchedule