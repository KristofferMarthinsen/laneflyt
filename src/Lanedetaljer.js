import React, { Component } from "react";
import styled from "styled-components"
import Nedbetaling from "./components/Nedbetaling";
import Header from "./components/Header";
import {VerdiLaneSum} from "./components/VerdiLaneSum";
import {Button} from "@staccx/bento";
import {Link} from "react-router-dom";

export class Lanedetaljer extends Component {  
  render() {
    return (
        <div>
        <Header title="Lånesum" id={0.5}/>
        <VerdiLaneSum/>
        <Nedbetaling/> 
       <Link to = "/Lanetakere"><Button>Videre</Button></Link>
        <Link to ="/Nedbetalingsplan"><Button variant="unstyledButton">Nedbetalingsplan</Button></Link>
        </div>
    );
  }
}

export default Lanedetaljer;


    