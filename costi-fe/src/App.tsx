import React, {useState} from 'react';
import './App.css';
import {Page,} from "./types";
import * as t from "./types";

import GenericError from "./Pages/GenericError";
import Landing from "./Pages/Landing";
import SigningPage from "./Pages/SigningPage";

function App() {
  const [step, setStep] = useState<Page>(t.LANDING)

  const content = (() => {
    switch (step) {
      case "LANDING":
        return <Landing goNext={() => setStep((t.SIGNING_PAGE))}/>;
      case "SIGNING_PAGE":
        return <SigningPage goNext={() => setStep(t.GENERIC_ERROR)}/>
      default:
        return <GenericError/>
    }
  })()

  return (
      <>
        {content}
      </>
  )
}

export default App;