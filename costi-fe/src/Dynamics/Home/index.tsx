import "./Home.css";
import { events } from "../config";

const Home = () => {
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
