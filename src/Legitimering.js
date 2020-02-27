import React, { Component } from "react";
import { Button, Heading } from "@staccx/bento";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DokApp } from "./svg/DokApp";
import Layout from "./components/Layout";

const Subtitle = () => (
  <>
    <h3>
      For å hente opplysninger fra deg automatisk trenger vi ditt samtykke
    </h3>
    <p>
      Du vil bli videresendt til Altinn sine nettsider for å hente informasjon
      om din lønn, gjeld og formue
    </p>
  </>
);
export const Legitimering = () => {
  return (
    <div>
      <Layout icon={DokApp} id={4} title="Legitimering" subtitle={Subtitle}>
        <Neste>
          <Link to="/Alltin">
            <Button>Ta meg til Altinn</Button>
          </Link>

          <Link to="/Estimat">
            <Button variant="unstyledButton"> Gå videre uten samtykke</Button>
          </Link>
        </Neste>
      </Layout>
    </div>
  );
};

export default Legitimering;

const Neste = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 27px;
  min-width: 300px;
  justify-content: space-around;

  button {
    width: 297px;
  }
`;
