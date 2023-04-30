import "./GenericError.css";
import React, { useState } from "react";

type Props = {
  goNext: () => void;
};

const GenericError = (props: Props) => {
  const [transitionNext, setTransitionNext] = useState<boolean>(false);

  const toLanding = () => {
    setTransitionNext(true);

    setTimeout(props.goNext, 800);
  };

  return (
    <React.Fragment>
      <div className={"log-background"}>
        <div
          className={
            transitionNext
              ? "reverse-back-image transitionLanding"
              : "reverse-back-image"
          }
          onClick={toLanding}
        >
            <h1 className={"white-h1"}>An Error Occurred</h1>
            <h2 className={"white-h2"}>Click anywhere to continue</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GenericError;
