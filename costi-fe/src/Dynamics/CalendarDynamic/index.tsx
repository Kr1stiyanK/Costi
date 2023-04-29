import "./CalendarDynamic.css";
import React, {useEffect, useState} from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {eventsApiCall, localizer} from "../config";
import {Calendar, Event} from "react-big-calendar";
import {POST} from "../../api";

const CalendarDynamic = () => {
    const [currentEvents, setCurrentEvents] = useState<Event[]>([]);

    const handleSelectSlot = (newDates: Event) => {
        newDates.title = prompt("Appointment Name");

        POST("/application/event", {
            title: newDates.title,
            startDate: newDates.start,
            endDate: newDates.end,
        })
            .then(() => setCurrentEvents([...currentEvents, newDates]))
            // TODO: Backend returns error;
            .catch(() => setCurrentEvents([...currentEvents, newDates]));
    };

    const handleDoubleClick = (editable: Event) => {
        //TODO: redo logic
        // Needs to be clocked to detect new differences
        const a = currentEvents;
        const h = currentEvents.find((it) => it === editable);
        editable.title = prompt("Appointment Name");
        const f = h;
        f!.title = editable.title;
        a.map((it) => (it === h ? f : it));
        setCurrentEvents(a);
    };

    useEffect(() => {
        eventsApiCall().then((data: Event[]) => setCurrentEvents(data.map(it => {
            return {title: it.title, start: new Date(it.start!.toString()), end: new Date(it.end!.toString())}
        })));
    }, []);

    return (
        <div className={"calendar-container"}>
            <Calendar
                localizer={localizer}
                onSelectEvent={(slotInfo: Event) => console.log(slotInfo)}
                events={currentEvents}
                onSelectSlot={(slotInfo) => handleSelectSlot(slotInfo)}
                selectable={true}
                onDoubleClickEvent={(eventEdit: Event) => handleDoubleClick(eventEdit)}
            />
        </div>
    );
};

export default CalendarDynamic;
