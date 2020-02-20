import React from "react";
import  styled  from "styled-components"
import { theming } from "@staccx/bento"
import VidereKnapp from "./components/VidereKnapp";
import SikkerhetLeggTil from "./SikkerhetLeggTil";
import { CheckBox, Button } from "@staccx/bento";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";

const Sikkerhet = () => {
  
    return (
        
      <div>
      <Button variant = "test">hei</Button>
        <h1>Sikkerhet</h1>
        <p>søtt bilde av et hus</p>
        <p>Har du en eiendom som kan brukes til sikkerhet for lånet?</p>
        <p>
          Du kan også legge til flere boliger som skal brukes til sikkerhet for
          lånet
        </p>

        <CheckBox id="1ID" group="test">
          En{" "}
        </CheckBox>
        <CheckBox id="2ID" group="test">
          Checkbox 2{" "}
        </CheckBox>
        <Link to = "/SikkerhetLeggTil"><Button>Legg til</Button></Link>
        <Link to = "/Okonomi"><Button>Videre</Button></Link>

      </div>
    );
  }

export default Sikkerhet;