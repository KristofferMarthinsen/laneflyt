import React, { Component } from "react";
import VidereKnapp from "./components/VidereKnapp";
import Header from "./components/Header";
import { Button, Heading } from "@staccx/bento";
import { Link } from "react-router-dom";
import { Gris } from "./svg/Gris";
import theme from "./theme/theme";
import styled from "styled-components";
import Layout from "./components/Layout";

const Subtitle = () => (
  <>
    <h3>Skal du låne sammen med noen?</h3>
    <p>
      En medlåntaker låner sammen med deg og er for eksempel 50% ansvarlig for lånet
    </p>
  </>
);

export const Lanetakere = () => {
  return (
    <div>
      <Layout icon={Gris} id={2} title="Lånetakere" subtitle={Subtitle}>
        <Svar>
          <Button variant="topButton">Ja</Button>
          <Button variant="topButton">Nei</Button>
        </Svar>

        <Videre>
          <Link to="/Husstanden">
            <Button>Videre</Button>
          </Link>
          <Link to="/Nedbetalingsplan">
            <Button variant="unstyledButton">Nedbetalingsplan ></Button>
          </Link>
        </Videre>
      </Layout>
    </div>
  );
};

export default Lanetakere;

const Svar = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 28px;
  width: 177px;
  justify-content: space-between;
  button {
    width: 83px;
  }
`;
const Videre = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 174px;
  min-width: 300px;
  justify-content: space-around;
  button {
    width: 144px;
  }
`;
