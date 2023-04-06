import "./Sidebar.css"
import React, {Dispatch, SetStateAction} from "react";
import * as t from "../../Dynamics/DynamicTypes";

type Props = {
    goNext: Dispatch<SetStateAction<t.Dynamic>>
}

const Sidebar = (props: Props) => {
    return (
        <div className={"side-bar"}>
            <div className={"options"}>
                <h2 className={"logo"}>COSTI</h2>
                <button className={"logout-btn"} onClick={() => props.goNext(t.HOME)}>HOME</button>
            </div>

            <button onClick={() => props.goNext(t.LOGOUT)} className={"logout-btn"}>Log out</button>
        </div>
    )
}

export default Sidebar;