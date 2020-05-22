import React from "react";
import Layout from "../Layout";
import HusstandForm from "./HusstandForm";
import AntallLanetakere from "./AntallLanetakere";
import { useApp } from "../../context/AppContextProvider";
import styled from "styled-components"

export const Husstanden = () => {
  const { medlantaker } = useApp();
  const {current} = useApp();
  return (
    <div>
      <Layout id={3} title="Husstanden" />
      {medlantaker && (
        <Lanetakere>
          <AntallLanetakere />
        </Lanetakere>
      )}
      <HusstandForm next="/Legitimering"/>
    </div>
  );
};
export default Husstanden;

const Lanetakere = styled.div`
  margin-bottom: 25px;
`;
