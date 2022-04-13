import React, { Fragment } from 'react';
import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import { sliceEvents, createPlugin } from '@fullcalendar/react';
import DateFormat from "./utils/FullCalendarUtils";

// class CustomView extends React.Component {
//     render(props) {
//         let segs = sliceEvents(props, true);

//         return (
//             <Fragment>
//                 <div class='view-title'>
//                     {props.dateProfile.currentRange.start.toUTCString()}
//                 </div>
//                 <div class='view-events'>
//                     {segs.length} events
//                 </div>
//             </Fragment>
//         );
//     }
// }

// export default createPlugin({
//     views: {
//         custom: CustomView
//     }
// });




{/* <FullCalendar
  plugins={[ dayGridPlugin ]}
  initialView="dayGridMonth"
  weekends={false}
  events={[
    { title: 'event 1', date: '2019-04-01' },
    { title: 'event 2', date: '2019-04-02' }
  ]}
/> */}


export default class DemoApp extends React.Component{
    render(){
        return(
            <DateFormat>
                <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                // eventContent={renderEventContent}
                dateClick={this.handleDateClick}
                />
            </DateFormat>
        )
    }

    handleDateClick = (arg) => {
        alert(arg.dateStr)
    }

}

// function renderEventContent(eventInfo) {
//     return(
//         <>
//             <b>{eventInfo.timeText}</b>
//             <i>{eventInfo.event.title}</i>
//         </>
//     )
// }