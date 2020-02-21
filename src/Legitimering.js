import React, { Component } from "react";
import { Button, Heading } from "@staccx/bento";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import { DokApp } from "./svg/DokApp";

export class Legitimering extends Component {
  render() {
    return (
      <div>
        <Header title="Legitimering" id={4} />
        {DokApp}
        <p>Bilde for å vise at det er et seriøst dokument</p>
        <h4>
          For å hente opplysninger fra deg automatisk trenger vi ditt samtykke
        </h4>
        <p>
          Du vil bli videresendt til Altinn sine nettsider for å hente
          informasjon om din lønn, gjeld og formue
        </p>
        <Link to="/Alltin">
          <Button>Ta meg til Altinn</Button>
        </Link>
        <Link to="/Estimat">
          <Button variant="unstyledButton"> Gå videre uten samtykke</Button>
        </Link>
      </div>
    );
  }
}

export default Legitimering;
