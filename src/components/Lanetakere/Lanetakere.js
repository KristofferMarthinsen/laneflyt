import React, { useState } from "react";
import { Button, RadioButton } from "@staccx/bento";
import { Link } from "react-router-dom";
import { Gris } from "../../svg/Gris";
import styled from "styled-components";
import Layout from "../Layout";
import { useApp } from "../../context/AppContextProvider"

const Subtitle = () => (
  <>
    <h3>Skal du låne sammen med noen?</h3>
    <p>
      En medlåntaker låner sammen med deg og er for eksempel 50% ansvarlig for
      lånet
    </p>
  </>
);

export const Lanetakere = () => {
  const {medlantaker, setMedlantaker} = useApp();
  return (
    <div>
      <Layout icon={Gris} id={2} title="Lånetakere" subtitle={Subtitle}>
        <Svar>
          <RadioButton
            defaultChecked
            id="ja"
            group="lanetakere"
            onChange={() => setMedlantaker(true)}
          >
            Ja
          </RadioButton>
          <RadioButton
            id="nei"
            group="lanetakere"
            onChange={() => setMedlantaker(false)}
          >
            Nei
          </RadioButton>
        </Svar>
        {console.log(medlantaker)}

        <div className="navigationButtons">
            <Link to="/Husstanden">
              <Button className="nextBtn">Videre</Button>
            </Link>
            <Link to="/Nedbetalingsplan">
              <Button className="payplanBtn" variant="unstyledButton">
                Nedbetalingsplan >
              </Button>
            </Link>
          </div>
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
