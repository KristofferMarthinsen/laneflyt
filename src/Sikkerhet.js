import React from "react";
import styled from "styled-components";
import { theming } from "@staccx/bento";
import VidereKnapp from "./components/VidereKnapp";
import SikkerhetLeggTil from "./SikkerhetLeggTil";
import { CheckBox, Button, Heading } from "@staccx/bento";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import {SikkerhetSVG} from "./svg/SikkerhetSVG"

const Sikkerhet = () => {
  return (
    <div>
      <Header title="Lånesum" id={6} />
      <p>søtt bilde av et hus</p>
      {SikkerhetSVG}
      <p>Har du en eiendom som kan brukes til sikkerhet for lånet?</p>
      <p>
        Du kan også legge til flere boliger som skal brukes til sikkerhet for
        lånet
      </p>

      <CheckBox id="1ID" group="test">
        En{" "}
      </CheckBox>
      <CheckBox id="2ID" group="test">
       To{" "}
      </CheckBox>
      <Link to="/SikkerhetLeggTil">
        <Button variant="unstyledButton">Legg til</Button>
      </Link>
      <Link to="/Okonomi">
        <Button>Videre</Button>
      </Link>
    </div>
  );
};

export default Sikkerhet;
