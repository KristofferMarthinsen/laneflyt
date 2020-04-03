import React from "react";
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
import Gjeld from "./Gjeld";
import GjeldLeggTil from "./GjeldLeggTil";
import theme from "./theme/theme";
import background from "./theme/header-background.png";
import { WebFonts, GlobalStyle } from "@staccx/bento";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Estimat2 from "./Estimat2";
import { ObjectId } from "mongodb"
import { laneflytCollection } from "./components/MongoDB";
// import {
// 	Stitch,
// 	AnonymousCredential,
// 	RemoteMongoClient
// } from "mongodb-stitch-browser-sdk";
//
//
// Stitch.initializeDefaultAppClient("laneflyten-bntik");
// export const client = Stitch.defaultAppClient;
// export const mongoClient = client.getServiceClient(
// 	RemoteMongoClient.factory,
// 	"mongodb-atlas"
// );
// client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
// 	console.log(`logged in anonymously as user ${user.id}`);
// });

laneflytCollection.find({})
	.asArray().then(docs => {
	docs.map(itm => {
		console.log(itm._id)
	})
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
            <Route path="/SikkerhetLeggTil">
              <SikkerhetLeggTil />
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
  min-height: 750px;
  .navigationButtons {
    padding-top: 50px;
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
