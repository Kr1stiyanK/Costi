import React, {ChangeEvent, useState} from "react";
import "./SigningPage.css";
import {POST} from "../../api";
import Login from "../../Components/Login";
import Registration from "../../Components/Registration";

type Props = {
    goNext: () => void
}

const SigningPage = (props: Props) => {
    const [transitionNext, setTransitionNext] = useState<boolean>(false),
        [loginToReg, setLoginToReg] = useState<boolean>(false);

    return (
        <React.Fragment>
            <div className={"log-background"}>
                <div className={transitionNext ? "back-image transitionHome" : "back-image"}>
                    {transitionNext ? null :
                        <div className={"flex"}>
                            {loginToReg ? <Registration goNext={props.goNext} transition={setTransitionNext}/> :
                                <Login goNext={props.goNext} transition={setTransitionNext}/>}
                            <div className={"registration-element"} onClick={() => setLoginToReg(!loginToReg)}>
                                <h2>{loginToReg ? "LOGIN" : "SIGNUP"}</h2></div>

                            <div className={"logo-name"}>
                                <h1 className={"text-containment"}>COSTI</h1>
                                <h2>Schedule management</h2>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default SigningPage;