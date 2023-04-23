import "./CalendarDynamic.css"
import React, {useEffect, useState} from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {localizer, events} from "../config"
import {Calendar, Event} from "react-big-calendar";
import {POST} from "../../api";

const CalendarDynamic = (() => {
    const [currentEvents, setCurrentEvents] = useState<Event[]>(events);

    const handleSelectSlot = (newDates: Event) => {
        newDates.title = prompt("Appointment Name");
        setCurrentEvents([...currentEvents, newDates])

        POST("/application/event", {
            title: newDates.title,
            startDate: newDates.start,
            endDate: newDates.end,
        })
            // TODO: [TO BE DISCUSSED] might be empty response
            .then(data => console.log(data))
            .catch(e => console.log("Error " + e))
    }

    const handleDoubleClick = (editable: Event) => {
        //TODO: redo logic
        // Needs to be clocked to detect new differences
        const a = currentEvents;
        const h = currentEvents.find(it => it === editable)
        editable.title = prompt("Appointment Name");
        const f = h;
        f!.title = editable.title;
        a.map(it => it === h ? f : it);
        setCurrentEvents(a);
    }

    useEffect(() => {
        setCurrentEvents(events)
    }, [])

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