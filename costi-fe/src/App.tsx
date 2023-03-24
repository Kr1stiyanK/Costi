import React, {useState} from 'react';
import './App.css';
import GenericError from "./Pages/GenericError";
import Landing from "./Pages/Landing";
import {Page} from "./types";
import * as t from "./types";

function App() {
  const [step, setStep] = useState<Page>(t.LANDING)

  const content = (() => {
    switch (step) {
      case "LANDING":
        return <Landing goNext={() => setStep((t.GENERIC_ERROR))}/>;
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