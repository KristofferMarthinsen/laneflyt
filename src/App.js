import React, { useState } from "react";
import Lanedetaljer from "./Lanedetaljer";
import Lanetakere from "./Lanetakere";
import Husstanden from "./Husstanden";
import Legitimering from "./Legitimering";
import Estimat from "./Estimat";
import Sikkerhet from "./Sikkerhet";
import SikkerhetLeggTil from "./SikkerhetLeggTil";
import { ThemeProvider } from "styled-components";
import NedbetalingsPlan from "./components/NedbetalingsPlan";
import Okonomi from "./Okonomi";
import theme from "./theme/theme";
import { WebFonts, GlobalStyle } from "@staccx/bento"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";


//const Step = ({ currentStep, onNext, onPrev }) => {
//switch (currentStep) {
//case 1:
//return <Lanedetaljer onNext={onNext} />;

//case 2:
//return <Lanetakere onNext={onNext} />;

//case 3:
//return <Husstanden onNext={onNext} />;

//case 4:
//return <Legitimering onNext={onNext} />;

//case 5:
//return <Estimat onNext={onNext} />;

//case 6:
//return <Sikkerhet onNext= {onNext}/>;

//default:
//return <div>Ukjent steg</div>;
//}
//};

function App() {
  //const [step, setStep] = useState(1);
  return (
    <Laneflyt>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <WebFonts/>
      <Router>
      
        <div className="laneflyt">
          <Switch>
          <Route exact path="/">
              <Lanedetaljer/>
            </Route>
            <Route path="/Lanetakere">
              <Lanetakere />
            </Route>
            <Route path="/Husstanden">
              <Husstanden/>
            </Route>
            <Route path="/Legitimering">
              <Legitimering/>
            </Route>
            <Route path="/Estimat">
              <Estimat/>
            </Route>
            <Route path="/Sikkerhet">
              <Sikkerhet/>
            </Route>
            <Route path="/SikkerhetLeggTil">
              <SikkerhetLeggTil/>
            </Route>
            <Route path="/NedbetalingsPlan">
              <NedbetalingsPlan/>
            </Route>
            <Route path="/Okonomi">
              <Okonomi/>
            </Route>
          </Switch>
          
        </div>
        
      </Router>
    </ThemeProvider>
    </Laneflyt>
  );
}

export default App;

const Laneflyt = styled.body`
background: #E5E5E5;

`




