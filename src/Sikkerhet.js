import React from "react";
import  styled  from "styled-components"
import { theming } from "@staccx/bento"
import VidereKnapp from "./components/VidereKnapp";
import SikkerhetLeggTil from "./SikkerhetLeggTil";
import { CheckBox, Button, Heading } from "@staccx/bento";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import Header from "./components/Header";

const Sikkerhet = () => {
  
    return (
        
      <div>
<<<<<<< Updated upstream
      
        <Header title="Lånesum" id={6}/>
=======
      <Button variant = "test">hei</Button>
>>>>>>> Stashed changes
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
        <Link to = "/SikkerhetLeggTil"><Button variant = "unstyledButton">Legg til</Button></Link>
        <Link to = "/Okonomi"><Button>Videre</Button></Link>

      </div>
    );
  }

export default Sikkerhet;


    