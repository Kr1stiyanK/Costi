import React, {useEffect, useState} from "react";
import "./SigningPage.css";
import Login from "../../Components/Login";
import Registration from "../../Components/Registration";

type Props = {
    goNext: () => void
}

const SigningPage = (props: Props) => {
    const [transitionNext, setTransitionNext] = useState<boolean>(false),
        [loginToReg, setLoginToReg] = useState<boolean>(false);

    const register = (state: boolean) => {
        setLoginToReg(state)
    }

    return (
      <React.Fragment>
        <div className={"log-background"}>
          <div
            className={
              transitionNext ? "back-image transitionHome" : "back-image"
            }
          >
            {transitionNext ? null : (
              <div className={"flex"}>
                {loginToReg ? (
                  <Registration transition={register} />
                ) : (
                  <Login goNext={props.goNext} transition={setTransitionNext} />
                )}
                <div
                  className={"registration-element"}
                  onClick={() => setLoginToReg(!loginToReg)}
                >
                  <h2>{loginToReg ? "LOGIN" : "SIGNUP"}</h2>
                </div>

                <div className={"logo-name"}>
                  <h1 className={"text-containment"}>COSTI</h1>
                  <h2>Schedule management</h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
}

export default SigningPage;