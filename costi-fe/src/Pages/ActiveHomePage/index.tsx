import "./ActiveHomePage.css";
import React from "react";

type Props = {
    goNext: () => void
}

const ActiveHomePage = (props: Props) => {
    return(
        <React.Fragment>
            <div className={"back-image-home"}>
                <button onClick={props.goNext}>Log out</button>
            </div>
        </React.Fragment>
    )
}

export default ActiveHomePage;