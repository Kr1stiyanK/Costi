import React, {useState} from 'react';
import './App.css';
import * as t from "./types";
import {Page} from "./types";

import GenericError from "./Pages/GenericError";
import Landing from "./Pages/Landing";
import SigningPage from "./Pages/SigningPage";
import ActiveHomePage from "./Pages/ActiveHomePage";

function App() {
    const [step, setStep] = useState<Page>(t.LANDING)

    const homepageRouter = () => {
        setStep(t.GENERIC_ERROR);
    }

    const content = (() => {
        switch (step) {
            case "LANDING":
                return <Landing goNext={() => setStep((t.SIGNING_PAGE))}/>;
            case "SIGNING_PAGE":
                return <SigningPage goNext={() => setStep(t.ACTIVE_HOME_PAGE)}/>
            case "ACTIVE_HOME_PAGE":
                return <ActiveHomePage goNext={() => homepageRouter()}/>
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