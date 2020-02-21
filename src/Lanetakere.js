import React, { Component } from "react";
import VidereKnapp from "./components/VidereKnapp";
import Header from "./components/Header";
import { Button, Heading } from "@staccx/bento";
import { Link } from "react-router-dom";
import { Gris } from "./svg/Gris";
export class Lanetakere extends Component {
  render() {
    return (
      <div>
        <Header title="Lånetakere" id={2} />
        {Gris}
        <p>2 stk griser i bilde form</p>
        <h3> Skal du låne sammen med noen?</h3>
        <p>
          En medlåntaker låner sammen med deg for eksempel en samboer kan låne
          sammen med deg og er f.eksempel 50% ansvarlig for lånet
        </p>
        <Button variant="">Ja</Button>
        <Button variant="">Nei</Button>

        <Link to="/Husstanden">
          <Button>Videre</Button>
        </Link>
      </div>
    );
  }
}

export default Lanetakere;


