import React from "react";
import { CheckBox, Button, Heading } from "@staccx/bento";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import {GjeldSVG} from "./svg/Gjeld1";
import { Gjeld2SVG } from "./svg/Gjeld2";


 const Gjeld = () => {
     return(
    <div>
     <Header title="Gjeld" id={7} />
     <GjeldSVG />
    <p>Legg inn din gjeld</p>
    <p>Dette inkluderer alle lån du har i dag, inkludert kredittkort og lignende.</p>
     <CheckBox id="1ID" group="test">
          En{" "}
        </CheckBox>
        <CheckBox id="2ID" group="test">
          To{" "}
        </CheckBox>
        <Link to="/GjeldLeggTil">
    
            <Button variant="unstyledButton">Legg til</Button>
          
          </Link>

          <Link to="/Estimat2">
          
            <Button>Videre</Button>
          
        </Link>

    </div>
     )
}
export default Gjeld;

