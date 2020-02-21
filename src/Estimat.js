import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button,Heading } from "@staccx/bento";
import Header from "./components/Header";

export class Estimat extends Component {
  render() {
    return (
      <div>
        <Header title="Estimat" id={5}/>
        <p>kult bilde</p>
        <p>
          Basert på informasjonen vi har så langt, tror vi du kan betjene dette
          lånet
        </p>
        <p>500 000 000 000 </p>
        <Button variant="unstyledButton">lånedetaljer</Button>
        <Link to="/Sikkerhet">
          <Button>Videre</Button>
        </Link>
      </div>
    );
  }
}

export default Estimat;
