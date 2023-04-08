import React, {ChangeEvent, useState} from "react";
import "./SigningPage.css";
import POST from "../../api";

type Props = {
    goNext: () => void
}

const SigningPage = (props: Props) => {
    const [username, setUsername] = useState<string>(""),
        [password, setPassword] = useState<string>(""),
        [transitionNext, setTransitionNext] = useState<boolean>(false);

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleContinue = () => {
        POST("/users/login", {
            email: username + "@costi.com",
            username: username,
            password: password
        }).then(data => {
            //Need to confirm correct response for successful identification
            console.log(data)
            setTransitionNext(true)
            setTimeout(props.goNext, 500)
        }).catch(error => {
                //Display errors
                console.error('Error:', error)
            }
        );
    }

    return (
        <React.Fragment>
            <div className={"log-background"}>
                <div className={transitionNext ? "back-image transitionHome" : "back-image"}>
                    {transitionNext ? null :
                        <div className={"flex"}>
                            <div className={"submit-form"}>
                                <h1>Login</h1>
                                <input className={"input"}
                                       value={username}
                                       onChange={handleUsernameChange}
                                       type="text"
                                       id="username"
                                       name="username"
                                       placeholder="Username"
                                />
                                <input className={"input"}
                                       value={password}
                                       onChange={handlePasswordChange}
                                       type="text"
                                       id="password"
                                       name="password"
                                       placeholder="Password"
                                />
                                <button className={"btn"}
                                        onClick={handleContinue}>
                                    Continue
                                </button>
                            </div>
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