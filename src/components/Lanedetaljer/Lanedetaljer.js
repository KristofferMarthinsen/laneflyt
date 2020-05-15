import React from "react";
import styled from "styled-components";
import Nedbetaling from "./Nedbetaling";
import Layout from "../Layout";

export const Lanedetaljer = () => {
  return (
    <div>
      <Layout id={1} title="Lånedetaljer" icon={null} subtitle={null} />
      <NedbetalingStyle>
        <Nedbetaling next="/Lanetakere" />
      </NedbetalingStyle>
    
    </div>
  );
};

export default Lanedetaljer;

// const Lånesum = styled.h1`
// padding-left: 6px;
// `


const NedbetalingStyle = styled.div`
  padding-top: 32px;
`;
