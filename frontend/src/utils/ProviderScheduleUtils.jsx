
import { formatDate } from '@fullcalendar/react';



let DateFormat = formatDate(new Date(), {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
});
console.log(str);

export default DateFormat