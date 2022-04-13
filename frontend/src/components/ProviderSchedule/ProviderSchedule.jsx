import React from 'react'
import FullCalendar from '@fullcalendar/react'

//Plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

let dayCalendar = {
    plugins: [ resourceTimelinePlugin ],
    initialView: 'resourceTimeline',
    resources: [

    ]
};

export default class ProviderSchedule extends React.Component {
    render(dayCalendar){
        return(
            <FullCalendar 
            // // schedulerLicenseKey=''
            // plugins={[ resourceTimelinePlugin ]}
            // eventContent={renderEventContent}
            // initialView='resourceTimeline'
            // events={[
            //     {title: 'event 1', date: '2022-04-01'},
            //     {title: 'event 2', date: '2022-04-05'}
            // ]}
            />
        )
    }

    handleDateClick = (arg) => {
        alert(arg.dateStr)
    }

}

// function renderEventContent(eventInfo) {
//     return (
//         <>
//             <b>{eventInfo.timeText}</b>
//             <i>{eventInfo.event.title}</i>
//         </>
//     )
// }