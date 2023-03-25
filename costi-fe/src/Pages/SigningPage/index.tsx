import React from "react";
import "./SigningPage.css";

type Props = {
    goNext: () => void
}

const SigningPage = (props: Props) => {
    return (
        <React.Fragment>
            <div className={"back-image"}>
                <p>Sign</p>
            </div>
        </React.Fragment>
    )
}

export default SigningPage;