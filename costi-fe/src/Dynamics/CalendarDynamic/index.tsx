import "./CalendarDynamic.css"
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {localizer} from "./config"
import {Calendar} from "react-big-calendar";

const CalendarDynamic = (() => {
    return (
        <div className={"calendar-container"}>
            <Calendar localizer={localizer}></Calendar>
        </div>
    );
})

export default CalendarDynamic