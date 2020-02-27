import React from "react";
import { CheckBox, Button, Heading } from "@staccx/bento";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import { Gjeld2SVG } from "./svg/Gjeld2";

const GjeldLeggTil = () => {
  return (
    <div>
      {Gjeld2SVG}
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
