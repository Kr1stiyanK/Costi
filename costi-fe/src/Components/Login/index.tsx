import React, { ChangeEvent, useState } from "react";
import { POST } from "../../api";
import "./Login.css";

type Props = {
  transition: React.Dispatch<React.SetStateAction<boolean>>;
  goNext: () => void;
};

const Login = (props: Props) => {
  const [username, setUsername] = useState<string>(""),
    [password, setPassword] = useState<string>("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleContinue = () => {
    POST("/users/login", {
      username: username,
      password: password,
    })
      .then((data) => {
        if (data) {
          props.transition(true);
          setTimeout(props.goNext, 500);
        }
      })
      .catch((error) => {
        //Display errors
        console.error("Error:", error);
      });
  };

  return (
    <div className={"submit-form"}>
      <h1>Login</h1>
      <input
        className={"input"}
        value={username}
        onChange={handleUsernameChange}
        type="username"
        id="username"
        name="username"
        placeholder="Username"
      />
      <input
        className={"input"}
        value={password}
        onChange={handlePasswordChange}
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
      <button className={"btn"} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default Login;
