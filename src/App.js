import React from "react";
import Lanedetaljer from "./components/Lanedetaljer/Lanedetaljer";
import Lanetakere from "./components/Lanetakere/Lanetakere";
import Husstanden from "./components/Husstanden/Husstanden";
import Legitimering from "./components/Legitimering/Legitimering";
import Estimat from "./components/Estimat/Estimat";
import Sikkerhet from "./components/Sikkerhet/Sikkerhet";
import { ThemeProvider } from "styled-components";
import NedbetalingsPlan from "./components/Nedbetalingsplan/NedbetalingsPlan";
import Okonomi from "./components/Okonomi/Okonomi";
import Gjeld from "./components/Gjeld/Gjeld";
import GjeldLeggTil from "./components/Gjeld/GjeldLeggTil";
import theme from "./theme/theme";
import background from "./theme/header-background.png";
import { WebFonts, GlobalStyle } from "@staccx/bento";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Estimat2 from "./components/Estimat/Estimat2";
import {AppContextProvider} from "./context/AppContextProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <GlobalStyle />
        <WebFonts />

        <Router>
          <Laneflyt>
            <Switch>
              <Route exact path="/">
                <Lanedetaljer title={"Lånedetaljer"} />
              </Route>
              <Route path="/Lanetakere">
                <Lanetakere title="Lånetakere" />
              </Route>
              <Route path="/Husstanden">
                <Husstanden />
              </Route>
              <Route path="/Legitimering">
                <Legitimering />
              </Route>
              <Route path="/Estimat">
                <Estimat />
              </Route>
              <Route path="/Sikkerhet">
                <Sikkerhet />
              </Route>
              <Route path="/NedbetalingsPlan">
                <NedbetalingsPlan />
              </Route>
              <Route path="/Okonomi">
                <Okonomi />
              </Route>
              <Route path="/Gjeld">
                <Gjeld />
              </Route>
              <Route path="/GjeldLeggTil">
                <GjeldLeggTil />
              </Route>
              <Route path="/Estimat2">
                <Estimat2 />
              </Route>
            </Switch>
          </Laneflyt>
        </Router>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;

const Laneflyt = styled.div`
  font-family: ${theme.body};
  font-weight: 200;
  background: #f4f4f4;
  max-width: 375px;
  background-image: url(${background});
  background-repeat: no-repeat;
  margin: 0 auto;
  padding: 24px;
  min-height: 667px;
  z-index: 0;
  .navigationButtons {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 280px;
  }
  .nextBtn {
    width: 140px;
  }
  .payplanBtn {
    width: 114px;
  }
`;
