import React from "react";
import { CheckBox, Button} from "@staccx/bento";
import { Link } from "react-router-dom";
import { GjeldSVG } from "./svg/Gjeld1";
import Layout from "./components/Layout";
import styled from "styled-components";
import GjeldLagtTil from "./components/GjeldLagtTil"

const Subtitle = () => (
  <>
    <h3>Legg inn din gjeld</h3>
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
      <Videre>
        <Link to="/Estimat2">
          <Button>Videre</Button>
        </Link>{" "}
        <Link to="/GjeldLeggTil">
            <Button variant="unstyledButton">Legg til > </Button>
        </Link>
      </Videre>
    </div>
  );
};
export default Gjeld;

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

