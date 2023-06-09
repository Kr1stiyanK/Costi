import React, { useState } from "react";
import "./App.css";
import * as t from "./types";
import { Page } from "./types";

import GenericError from "./Pages/GenericError";
import Landing from "./Pages/Landing";
import SigningPage from "./Pages/SigningPage";
import DynamicHomepage from "./Pages/DynamicHomepage";

function App() {
  const [step, setStep] = useState<Page>(t.LANDING);

  const errorMock = (dynamic: Page) => {
    setStep(dynamic);
  };

  const content = (() => {
    switch (step) {
      case "LANDING":
        return <Landing goNext={() => setStep(t.SIGNING_PAGE)} />;
      case "SIGNING_PAGE":
        return <SigningPage goNext={() => setStep(t.DYNAMIC_HOME_PAGE)} />;
      case "DYNAMIC_HOME_PAGE":
        return <DynamicHomepage goNext={(page: Page) => errorMock(page)} />;
      case "GENERIC_ERROR":
      default:
        return <GenericError goNext={() => setStep(t.LANDING)}/>;
    }
  })();

  return <>{content}</>;
}

export default App;
