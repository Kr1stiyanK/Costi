import "./DynamicHomepage.css";
import React, { useState } from "react";
import { Dynamic, HOME } from "../../Dynamics/DynamicTypes";
import Home from "../../Dynamics/Home";
import Sidebar from "../../Components/Sidebar";
import CalendarDynamic from "../../Dynamics/CalendarDynamic";
import EditEvent from "../../Dynamics/EditEvent";
import { Page } from "../../types";
import * as t from "../../types";

type Props = {
  goNext: (dynamic: Page) => void;
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
        props.goNext(t.SIGNING_PAGE);
        return;
      case "ERROR":
      default:
        props.goNext(t.GENERIC_ERROR);
        return;
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
