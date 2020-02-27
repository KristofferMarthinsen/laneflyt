import React from "react";
import { CheckBox, Button, Heading } from "@staccx/bento";
import { Link } from "react-router-dom";
import { GjeldSVG } from "./svg/Gjeld1";
import Layout from "./components/Layout";
import styled from "styled-components";

const Subtitle = () => (
  <>
    <h3>Legg in din gjeld</h3>
    <p>
      Dette inkluderer alle lån du har i dag, inkludert kredittkort og lignende.
    </p>
  </>
);

const Gjeld = () => {
  return (
    <div>
      <Layout icon={GjeldSVG} id={7} title="Gjeld" subtitle={Subtitle}></Layout>
      <CheckBox id="1ID" group="test">
        En{" "}
      </CheckBox>
      <CheckBox id="2ID" group="test">
        To{" "}
      </CheckBox>
      <Link to="/GjeldLeggTil">
        <LeggTil>
          <Button variant="unstyledButton">Legg til > </Button>
        </LeggTil>
      </Link>

      <Link to="/Estimat2">
        <Videre>
          <Button>Videre</Button>
        </Videre>
      </Link>
    </div>
  );
};
export default Gjeld;

const Videre = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  min-width: 300px;
  justify-content: space-around;
  button {
    width: 280px;
  }
`;

const LeggTil = styled.div`
 padding-left: 280px;

`
