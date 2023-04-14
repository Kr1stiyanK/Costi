import "./CalendarDynamic.css"
import React, {useState} from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {localizer, events} from "../config"
import {Calendar, Event} from "react-big-calendar";

const CalendarDynamic = (() => {
    const [currentEvents, setCurrentEvents] = useState<Event[]>(events);

    const handleSelectSlot = (newDates : Event) => {
        setCurrentEvents([...currentEvents, newDates])
    }

    const handleDoubleClick = (editable : Event) => {

    }

    return (
        <div className={"calendar-container"}>
            <Calendar localizer={localizer}
                      onSelectEvent={(slotInfo: Event) => console.log(slotInfo)}
                      events={currentEvents}
                      onSelectSlot={(slotInfo) => handleSelectSlot(slotInfo)}
                      selectable={true}
                      onDoubleClickEvent={(eventEdit: Event) => handleDoubleClick(eventEdit)}
            />
        </div>
    );
})

export default CalendarDynamic