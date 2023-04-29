import "./Home.css";
import {eventsApiCall} from "../config";
import {useEffect, useState} from "react";
import {Event} from "react-big-calendar";

const Home = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        eventsApiCall().then((data: Event[]) => setEvents(data));
    }, []);

    return (
    <>
      <div className={"upcoming-events"}>
        <h1>Hello!</h1>
        {events.length > 0 ? (
          <>
            <h2>Your upcoming events: </h2>{" "}
            {events.map((it) => it.title + ", ")}
          </>
        ) : (
          <>
            <h2>You have no upcoming events.</h2> <br />{" "}
            <h3>You can make some in the "add event" tab in the sidebar!</h3>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
