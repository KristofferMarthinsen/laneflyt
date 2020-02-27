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

const Sikkerhet = () => {
  return (
    <div>
      <Wrapper>
        <HeaderElement>
          <Header title="Sikkerhet" id={6} />
        </HeaderElement>
        <Icon> {SikkerhetSVG}</Icon>
        <Tekst>
          <p>Har du en eiendom som kan brukes til sikkerhet for lånet?</p>
        </Tekst>
        <LitenTekst>
          <p>
            Du kan også legge til flere boliger som skal brukes til sikkerhet
            for lånet
          </p>
        </LitenTekst>

        <CheckBox id="1ID" group="test">
          En{" "}
        </CheckBox>
        <CheckBox id="2ID" group="test">
          To{" "}
        </CheckBox>
        <Link to="/SikkerhetLeggTil">
          <LeggTil>
            <Button variant="unstyledButton">Legg til</Button>
          </LeggTil>
        </Link>
        <Link to="/Okonomi">
          <Videre>
            <Button>Videre</Button>
          </Videre>
        </Link>
      </Wrapper>
    </div>
  );
};

export default Sikkerhet;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 800px;
`;

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
const HeaderElement = styled.div`
  align-self: flex-start;
  padding-left: 7px;
`;
const Icon = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 69px;
`;

const Tekst = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 14px;
  width: 290px;
  h3 {
    font-size: 16px;
    font-weight: normal;
  }
`;
const LeggTil = styled.div`
  margin-left: 250px;
`;

const LitenTekst = styled.p`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 14px;
text-align: center;



`