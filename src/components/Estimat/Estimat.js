import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@staccx/bento";
import { EstimatSVG } from "../../svg/EstimatSVG";
import styled from "styled-components";
import Layout from "../Layout";
import { laneflytCollection } from "../../MongoDB";

let boligVerdi = 0;
let laneSum = 0;

export const Estimat = () => {
  const [gittEstimat, setGittEstimat] = useState(0);

  laneflytCollection
    .findOne()
    .then((result) => {
      if (result) {
        boligVerdi = result.BoligVerdi;
        laneSum = result.LaneSum;
        setGittEstimat(boligVerdi - laneSum);
        console.log(gittEstimat);
      } else {
        console.log("No document matches the provided query.");
      }
      console.log(
        "Boligverdi ",
        boligVerdi,
        "LåneSum ",
        laneSum,
        "Estimat ",
        gittEstimat
      );
    })
    .catch((err) => console.error(`Failed to find document: ${err}`));

  const Subtitle = () => (
    <>
      <h3>
        Basert på informasjonen vi har så langt, tror vi du kan betjene dette
        lånet
      </h3>
      <h1>{gittEstimat}</h1> {/*Display calculated estimate*/}
    </>
  );

  return (
    <div>
      <Layout icon={EstimatSVG} id={5} title="Estimat" subtitle={Subtitle} />
      <Estimate>
        <Button variant="unstyledButton">Lånedetaljer ></Button>
      </Estimate>

      <Videre>
        <Link to="/Sikkerhet">
          <Button>Videre</Button>
        </Link>
      </Videre>
    </div>
  );
};

export default Estimat;

const Estimate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  text-align: center;
  padding-top: 23px;
  h1 {
    font-size: 32px;
    font-weight: 600;
  }
`;

const Videre = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  min-width: 300px;
  justify-content: space-around;
  button {
    width: 280px;
  }
`;
