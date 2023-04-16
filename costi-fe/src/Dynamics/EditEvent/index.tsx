import "./EditEvent.css";
import React, {useEffect, useState} from "react";
import {GET, POST} from "../../api";
import {events} from "../config";
import {Event} from "react-big-calendar";

const EditEvent = () => {
    const [title, setTitle] = useState<string>(""),
        [startDate, setStartDate] = useState<Date | null>(null),
        [endDate, setEndDate] = useState<Date | null>(null),
        [userEvents, setUserEvents] = useState<Event[]>();

    const handleTitleChange = (newTitle: string) => {
        setTitle(newTitle)
    }

    const handleStartDate = (newStart: Date | null) => {
        setStartDate(newStart)
    }

    const handleEndDate = (newEnd: Date | null) => {
        setEndDate(newEnd)
    }

    const handleSave = () => {
        POST("/application/event", {
            title: title,
            startDate: startDate,
            endDate: endDate,
        })
            // TODO: [TO BE DISCUSSED] might be empty response
            .then(data => console.log(data))
            .catch(e => console.log("Error " + e))
    }

    const handleDeleteEvent = (event: Event) => {
        POST("/application/delete-event", {
            title: event.title,
            start: event.start,
            end: event.end
        })
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    const handleDeleteAllEvents = () => {
        GET("/application/delete-all")
            .then(data => data.json())
            .then(openResponse => setUserEvents(openResponse))
            .catch(e => console.log("Error: " + e))
    }

    useEffect(() => {
        // TODO: Should be config api call;
        setUserEvents(events);
    },[])

    return (
        <div className={"event-control"}>
            <div className={"edit-control"}>
                <input className={"event-input"}
                       value={title}
                       onChange={(titleChange) => handleTitleChange(titleChange.target.value)}
                       type="text"
                       placeholder="Title of Event"
                />

                <input className={"event-input"}
                       value={startDate?.getDate()}
                       onChange={(startDateChange) => handleStartDate(startDateChange.target.valueAsDate)}
                       type="text"
                       placeholder="Start Date"
                />
                {/* Should be Datepickers for ease of use */}
                <input className={"event-input"}
                       value={endDate?.getDate()}
                       onChange={(endDateChange) => handleEndDate(endDateChange.target.valueAsDate)}
                       type="text"
                       placeholder="End Date"
                />
                <br/>

                <button className={"event-btn"}
                        onClick={handleSave}
                >
                    Save
                </button>
            </div>

            {userEvents ? <div className={"edit-delete-control"}>
                {
                    userEvents.map(it => it.start ?
                        <div className={"delete-control"}>
                            <p>{it.title}</p>
                            <p>{it.start.toDateString()}</p>
                            <button onClick={() => handleDeleteEvent(it)}> Delete</button>
                        </div>
                        : null)
                }
                <button className={"event-btn"} onClick={handleDeleteAllEvents}> Delete all</button>
            </div>
            : null}
        </div>
    )
}

export default EditEvent;