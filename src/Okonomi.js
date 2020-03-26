import React from "react";
import { OkonomiSVG } from "./svg/OkonomiSVG";
import Layout from "./components/Layout";
import styled from "styled-components";
import { OkonomiForm } from "./components/Form/Okonomi/OkonomiForm";

const Subtitle = () => (
  <>
    <p>Legg inn samlet økonomi</p>
  </>
);

const Okonomi = () => {
  return (
    <div>
      <Layout icon={OkonomiSVG} id={7} title="Økonomi" subtitle={Subtitle} />
      <FormLayout>
        <OkonomiForm next="/Gjeld" />
      </FormLayout>
    </div>
  );
};

export default Okonomi;

const FormLayout = styled.div`
  padding-top: 25px;
`;
