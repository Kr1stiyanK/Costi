import "./CalendarDynamic.css";
import React, { useEffect, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { eventsApiCall, localizer } from "../config";
import { Calendar, Event } from "react-big-calendar";
import { POST } from "../../api";

const CalendarDynamic = () => {
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);

  const handleSelectSlot = (newDates: Event) => {
    newDates.title = prompt("Appointment Name");
    if (newDates.title === "") return;

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
    const tempTitle: string | null = prompt("Appointment Name");

    POST("/application/edit-event", {
      titleOld: editable.title,
      startOld: editable.start,
      endOld: editable.end,
      titleNew: tempTitle,
      startNew: editable.start,
      endNew: editable.end,
    })
      .then(() => loadMapEvents())
      .catch(() => loadMapEvents());
  };

  const loadMapEvents = () =>
    eventsApiCall().then((data: Event[]) => {
      console.log(data);
      setCurrentEvents(
        data.map((it) => {
          return {
            title: it.title,
            start: new Date(it.start!.toString()),
            end: new Date(it.end!.toString()),
          };
        })
      );
    });

  useEffect(() => {
    loadMapEvents();
  }, []);

  return (
    <div className={"calendar-container"}>
      <Calendar
        localizer={localizer}
        events={currentEvents}
        onSelectSlot={(slotInfo) => handleSelectSlot(slotInfo)}
        selectable={true}
        onDoubleClickEvent={(eventEdit: Event) => handleDoubleClick(eventEdit)}
      />
    </div>
  );
};

export default CalendarDynamic;
