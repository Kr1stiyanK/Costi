import "./Sidebar.css";
import React, { Dispatch, SetStateAction } from "react";
import * as t from "../../Dynamics/DynamicTypes";
import { GET } from "../../api";

type Props = {
  goNext: Dispatch<SetStateAction<t.Dynamic>>;
};

const Sidebar = (props: Props) => {
  const logout = () => {
    GET("/users/logout")
      .then(() => props.goNext(t.LOGOUT))
      .catch(() => props.goNext(t.LOGOUT));
  };

  return (
    <div className={"side-bar"}>
      <div className={"options"}>
        <h2 className={"logo"}>COSTI</h2>
        <button className={"logout-btn"} onClick={() => props.goNext(t.HOME)}>
          HOME
        </button>
        <button
          className={"logout-btn"}
          onClick={() => props.goNext(t.CALENDAR)}
        >
          CALENDAR
        </button>
        <button
          className={"logout-btn"}
          onClick={() => props.goNext(t.EDIT_EVENT)}
        >
          EDIT EVENTS
        </button>
      </div>

      <button onClick={logout} className={"logout-btn"}>
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
