import "./DynamicHomepage.css";
import React, { useState } from "react";
import { Dynamic, HOME } from "../../Dynamics/DynamicTypes";
import Home from "../../Dynamics/Home";
import GenericError from "../GenericError";
import Sidebar from "../../Components/Sidebar";
import CalendarDynamic from "../../Dynamics/CalendarDynamic";
import EditEvent from "../../Dynamics/EditEvent";

type Props = {
  goNext: () => void;
};

const DynamicHomepage = (props: Props) => {
  const [viewport, setViewport] = useState<Dynamic>(HOME);

  const content = (() => {
    switch (viewport) {
      case "HOME":
        return <Home />;
      case "CALENDAR":
        return <CalendarDynamic />;
      case "EDIT_EVENT":
        return <EditEvent />;
      case "LOGOUT":
        props.goNext();
        return;
      default:
        return <GenericError />;
    }
  })();

  return (
    <React.Fragment>
      <div className={"back-image-home"}>
        <Sidebar goNext={setViewport} />

        <div className={"viewport"}>{content}</div>
      </div>
    </React.Fragment>
  );
};

export default DynamicHomepage;
