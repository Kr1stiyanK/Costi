import "./Sidebar.css"
import React from "react";

type Props = {
    goNext: () => void
}

const Sidebar = (props: Props) => {
    return (
        <div className={"side-bar"}>
            <div className={"options"}>
                <h2>COSTI</h2>


            </div>

            <button onClick={props.goNext} className={"logout-btn"}>Log out</button>
        </div>
    )
}

export default Sidebar;