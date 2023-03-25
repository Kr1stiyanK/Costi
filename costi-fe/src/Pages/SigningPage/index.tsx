import React, {ChangeEvent, useState} from "react";
import "./SigningPage.css";
import POST from "../../api";


type Props = {
    goNext: () => void
}

const SigningPage = (props: Props) => {
    const [username, setUsername] = useState<string>(""),
        [password, setPassword] = useState<string>("");

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleContinue = () => {
        POST("/users/login", {
            username: username,
            password: password
        }).then(data => {
            //Need to confirm correct response for successful identification
            console.log(data)
            props.goNext()
        }).catch(error => {
                //Display errors
                console.error('Error:', error)
            }
        );
    }

    return (
        <React.Fragment>
            <div className={"back-image"}>
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
            </div>
        </React.Fragment>
    )
}

export default SigningPage;