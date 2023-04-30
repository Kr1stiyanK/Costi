import "./EditEvent.css";
import React, { useEffect, useState } from "react";
import { GET, POST } from "../../api";
import { eventsApiCall } from "../config";
import { Event } from "react-big-calendar";

const EditEvent = () => {
  const [title, setTitle] = useState<string>(""),
    [startDate, setStartDate] = useState<Date | null>(null),
    [endDate, setEndDate] = useState<Date | null>(null),
    [userEvents, setUserEvents] = useState<Event[]>([]);

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleStartDate = (newStart: Date | null) => {
    setStartDate(newStart);
  };

  const handleEndDate = (newEnd: Date | null) => {
    setEndDate(newEnd);
  };

  const handleSave = () => {
    POST("/application/event", {
      title: title,
      startDate: startDate,
      endDate: endDate,
    })
      .then(() => {
        loadMapEvents();
      })
      .catch((e) => {
        loadMapEvents();
        console.log("Error " + e);
      });
  };

  const handleDeleteEvent = (event: Event) => {
    POST("/application/delete-event", {
      title: event.title,
      start: event.start,
      end: event.end,
    })
      .then(() => loadMapEvents())
      .catch((error) => {
        loadMapEvents();
        console.log(error);
      });
  };

  const handleDeleteAllEvents = () => {
    GET("/application/delete-all")
      .then((data) => data.json())
      .then((openResponse) => setUserEvents(openResponse))
      .catch((e) => console.log("Error: " + e));
  };

  const handleEventClick = (editable: Event) => {
    setTitle(editable.title as string);
    setStartDate(editable.start as Date);
    setEndDate(editable.end as Date);
  };

  const loadMapEvents = () =>
    eventsApiCall().then((data: Event[]) =>
      setUserEvents(
        data.map((it) => {
          return {
            title: it.title,
            start: new Date(it.start!.toString()),
            end: new Date(it.start!.toString()),
          };
        })
      )
    );

  useEffect(() => {
    loadMapEvents();
  }, []);

  return (
    <div className={"event-control"}>
      <div className={"edit-control"}>
        <input
          className={"event-input"}
          value={title}
          onChange={(titleChange) =>
            handleTitleChange(titleChange.target.value)
          }
          type="text"
          placeholder="Title of Event"
        />

        <input
          className={"event-input"}
          value={startDate?.toISOString()}
          onChange={(startDateChange) => {
            const testDate: Date = new Date(startDateChange.target.value);
            Object.prototype.toString.call(testDate) === "[object Date]"
              ? testDate.getTime()
                ? handleStartDate(testDate)
                : console.log()
              : console.log();
          }}
          type="text"
          placeholder="Start Date"
        />
        {/* Should be Datepickers for ease of use */}
        <input
          className={"event-input"}
          value={endDate?.toISOString()}
          onChange={(endDateChange) => {
            const testDate: Date = new Date(endDateChange.target.value);
            Object.prototype.toString.call(testDate) === "[object Date]"
              ? testDate.getTime()
                ? handleEndDate(testDate)
                : console.log()
              : console.log();
          }}
          type="text"
          placeholder="End Date"
        />
        <br />

        <button className={"event-btn"} onClick={handleSave}>
          Save
        </button>
      </div>

      {userEvents.length > 0 ? (
        <div className={"edit-delete-control"}>
          {userEvents.map((it) =>
            it.start ? (
              <div
                className={"delete-control"}
                onClick={() => handleEventClick(it)}
              >
                <p>{it.title}</p>
                <p>{it.start.toDateString()}</p>
                <button onClick={() => handleDeleteEvent(it)}> Delete</button>
              </div>
            ) : null
          )}

          <button className={"event-btn"} onClick={handleDeleteAllEvents}>
            {" "}
            Delete all
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default EditEvent;
