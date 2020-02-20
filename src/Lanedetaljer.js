import React, { Component } from "react";
import styled from "styled-components"
import Nedbetaling from "./components/Nedbetaling";

import {VerdiLaneSum} from "./components/VerdiLaneSum";
import {Button, Heading} from "@staccx/bento";
import {Link} from "react-router-dom";

export class Lanedetaljer extends Component {  
  render() {
    return (
      <Wrapper>
        <Heading> Lånedetaljer</Heading>
        <VerdiLaneSum/>
        <Nedbetaling/> 
       <Link to = "/Lanetakere"><Button>Videre</Button></Link>
       <Link to = "/NedbetalingsPlan"><Button variant ="testi">Nedbetalingsplan</Button></Link>
      </Wrapper>
    );
  }
}

export default Lanedetaljer;

const Header = styled.h1`
    color: ;
    `
const Wrapper = styled.div`
    background-color: ;



`
    