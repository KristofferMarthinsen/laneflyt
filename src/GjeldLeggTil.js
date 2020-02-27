import React from "react";
import { CheckBox, Button, Heading } from "@staccx/bento";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import { Gjeld2SVG } from "./svg/Gjeld2";
import Layout from "./components/Layout";

const Subtitle = () => (
  <>
    <p>
      Legg til samlet gjeld
    </p>
  </>
);

const GjeldLeggTil = () => {
  return (
    <div>
      <Layout icon={Gjeld2SVG} id={7} title="Legg til gjeld" subtitle={Subtitle}/>
       <CheckBox id="1ID" group="test">
        En{" "}
      </CheckBox>
      <CheckBox id="2ID" group="test">
        To{" "}
      </CheckBox>
      <Link to="/Gjeld">
        <Button>Lagre</Button>
      </Link>
    </div>
  );
};
export default GjeldLeggTil;
