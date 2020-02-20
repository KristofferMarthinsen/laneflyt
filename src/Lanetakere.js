import React, { Component } from "react";
import VidereKnapp from "./components/VidereKnapp";
import { Button,Heading } from "@staccx/bento";
import { Link } from "react-router-dom";
export class Lanetakere extends Component {
  render() {
    return (
      <div>
        <Heading>Lånetakere</Heading>
        <p>2 stk griser i bilde form</p>
        <Button>Ja</Button>
        <Button>Nei</Button>

        <Link to="/Husstanden">
          <Button>Videre</Button>
        </Link>
      </div>
    );
  }
}

export default Lanetakere;
