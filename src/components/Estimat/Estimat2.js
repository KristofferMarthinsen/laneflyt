import React from "react";
import { Link } from "react-router-dom";
import { Button} from "@staccx/bento";
import { EstimatSVG } from "../../svg/EstimatSVG";
import styled from "styled-components";
import Layout from "../Layout";

const Subtitle = () => (
  <>
    <h3>
      Basert på informasjonen vi har så langt, tror vi du kan betjene dette
      lånet
    </h3>
    <h1>500 123 333.-</h1>
  </>
);

export const Estimat2 = () => {
  return (
    <div>
      <Layout icon={EstimatSVG} id={7} title="Estimat" subtitle={Subtitle} />
      <Estimate>
        <Button variant="unstyledButton">Lånedetaljer ></Button>
      </Estimate>

      <Videre>
        <Link to="/Finito">
          <Button>Send inn søknad!</Button>
        </Link>
      </Videre>
    </div>
  );
};

export default Estimat2;

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
  padding-top: 20px;
  min-width: 300px;
  justify-content: space-around;
  button {
    width: 280px;
  }
`;
