import "./CalendarDynamic.css"
import {Calendar} from "react-big-calendar";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import {localizer} from "./config"

const CalendarDynamic = (() => {

    return (
        <div className={"calendar-container"}>
            <Calendar localizer={localizer}></Calendar>
        </div>
    );
})

export default CalendarDynamic