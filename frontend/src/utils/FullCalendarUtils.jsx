import { Navigate } from "react-router-dom";
import React from "react";
import useAuth from "../hooks/useAuth";
import { formatDate } from '@fullcalendar/react';

let DateFormat = formatDate(new Date(), {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
});
console.log(str);

export default DateFormat