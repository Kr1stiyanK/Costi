import "./EditEvent.css";
import React, {useState} from "react";

const EditEvent = () => {
    const [title, setTitle] = useState<string>(),
        [startDate, setStartDate] = useState<string>(),
        [endDate, setEndDate] = useState<string>();

    const handleTitleChange = (newTitle: string) => {
        setTitle(newTitle)
    }

    const handleStartDate = (newStart: string) => {
        setStartDate(newStart)
    }

    const handleEndDate = (newEnd: string) => {
        setEndDate(newEnd)
    }

    const handleSave = () => {
        // TODO: POST Api call to save the new/edited event
    }

    return (
        <div className={"event-control"}>
            <input className={"event-input"}
                   value={title}
                   onChange={(titleChange) => handleTitleChange(titleChange.target.value)}
                   type="text"
                   placeholder="Title of Event"
            />

            <input className={"event-input"}
                   value={startDate}
                   onChange={(startDateChange) => handleStartDate(startDateChange.target.value)}
                   type="text"
                   placeholder="Start Date"
            />

            <input className={"event-input"}
                   value={endDate}
                   onChange={(endDateChange) => handleEndDate(endDateChange.target.value)}
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
    )
}

export default EditEvent;