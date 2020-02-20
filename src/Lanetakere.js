import React, { Component } from "react";
import VidereKnapp from "./components/VidereKnapp";
import Header from "./components/Header";
import { Button,Heading } from "@staccx/bento";
import { Link } from "react-router-dom";
export class Lanetakere extends Component {
  render() {
    return (
      <div>
        <Header title="Lånetakere" id={2}/>
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
