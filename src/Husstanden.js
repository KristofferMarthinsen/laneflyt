import React from "react";
import { Link } from "react-router-dom";
import Layout from "./components/Layout";
import {Button} from "@staccx/bento";
import styled from "styled-components";
import HusstandForm from "./components/Form/HusstandForm"

export const Husstanden = () => {
  return (
    <div>
      <Layout id={3} title="Husstanden" />
      
      <HusstandForm/>
      <Buttons>
        <Link to="/Legitimering">
          <Button>Videre</Button>
        </Link>
        <Link to="/Nedbetalingsplan">
          <Button variant="unstyledButton">Nedbetalingsplan</Button>
        </Link>
      </Buttons>
    </div>
  );
};
export default Husstanden;

const Buttons = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  padding-left: 24px;
  justify-content: space-between;
`;

