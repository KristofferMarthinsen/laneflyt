import React from "react";
import styled from "styled-components";
import { theming } from "@staccx/bento";
import VidereKnapp from "./components/VidereKnapp";
import SikkerhetLeggTil from "./SikkerhetLeggTil";
import { CheckBox, Button, Heading } from "@staccx/bento";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import { SikkerhetSVG } from "./svg/SikkerhetSVG";
import Layout from "./components/Layout";
import PopupForm from "./components/PopupForm";

const Subtitle = () => (
  <>
    <h3>Har du en eiendom som kan brukes til sikkerhet for lånet?</h3>
    <p>
      Du kan også legge til flere boliger som skal brukes til sikkerhet for
      lånet
    </p>
  </>
);

const Sikkerhet = () => {
  return (
    <div>
      <Layout
        title="Sikkerhet"
        id={6}
        icon={SikkerhetSVG}
        subtitle={Subtitle}
      />

      <CheckBox id="1ID" group="test">
        En{" "}
      </CheckBox>
      <CheckBox id="2ID" group="test">
        To{" "}
      </CheckBox>
      <Link to="/SikkerhetLeggTil">
        <LeggTil>
          <Button variant="unstyledButton">Legg til > </Button>
          <PopupForm/>
        </LeggTil>
      </Link>
      <Link to="/Okonomi">
        <Videre>
          <Button>Videre</Button>

        </Videre>
      </Link>
    </div>
  );
};

export default Sikkerhet;

const Videre = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 300px;
  min-width: 300px;
  justify-content: space-around;
  button {
    width: 280px;
  }
`;

const LeggTil = styled.div`
  margin-left: 250px;
`;