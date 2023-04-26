import React, { ChangeEvent, useState } from "react";
import { POST } from "../../api";
import "./Registration.css";

type Props = {
  transition: (state: boolean) => void;
};

const Registration = (props: Props) => {
  const [username, setUsername] = useState<string>(""),
    [email, setEmail] = useState<string>(""),
    [password, setPassword] = useState<string>(""),
    [confirmPassword, setConfirmPassword] = useState<string>(""),
    [notValid, setNotValid] = useState<boolean>(false);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setNotValid(true);
    } else {
      setNotValid(false);
    }
  };

  const handleContinue = () => {
    POST("/users/register", {
      email: email,
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    })
      .then((data) => {
        if (data) {
          props.transition(false);
        }
      })
      .catch((error) => {
        //Display errors
        console.error("Error:", error);
      });
  };

  return (
    <div className={"submit-form"}>
      <h1>Sign Up</h1>
      <input
        className={"input"}
        value={email}
        onChange={handleEmailChange}
        type="email"
        id="email"
        name="email"
        placeholder="Email"
      />
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
      <input
        className={"input"}
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm Password"
      />
      {notValid ? <p>Passwords must be the same!</p> : null}
      <button
        className={notValid ? "btn not-valid" : "btn"}
        onClick={notValid ? () => null : handleContinue}
      >
        Create Account
      </button>
    </div>
  );
};

export default Registration;
