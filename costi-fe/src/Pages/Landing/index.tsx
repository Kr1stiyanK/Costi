import React, { useState } from "react";
import "./Landing.css";

type Props = {
  goNext: () => void;
};

const Landing = (props: Props) => {
  const [transitionNext, setTransitionNext] = useState<boolean>(false);

  const handleNext = () => {
    setTransitionNext(true);
    setTimeout(props.goNext, 500);
  };

  return (
    <React.Fragment>
      <div className={"homepage"}>
        {transitionNext ? null : (
          <div className={"sign-in-up"}>
            <h1 onClick={handleNext}>Sign in | Sign up</h1>
          </div>
        )}
        <div
          className={
            transitionNext ? "transition-image transition" : "transition-image "
          }
        />
      </div>
    </React.Fragment>
  );
};

export default Landing;
