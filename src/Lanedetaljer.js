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
        <Lånesum>
        <Header title="Lånedetaljer" id={0.5}/>
        </Lånesum>
        <VerdiLaneSumStyle>
        <VerdiLaneSum/>
        </VerdiLaneSumStyle>
        <NedbetalingStyle>
        <Nedbetaling/> 
        </NedbetalingStyle>
        <Buttons>
       <Link to = "/Lanetakere"><Button>Videre</Button></Link>
        <Link to ="/Nedbetalingsplan"><Button variant="unstyledButton">Nedbetalingsplan</Button></Link>
        </Buttons>
        </div>
    );
  }
}

export default Lanedetaljer;

const Lånesum = styled.h1`
padding-top: 124px;
padding-left: 6px;
`

const Buttons = styled.div`
padding-top: 32px;
display: flex;
flex-direction: row;
padding-left: 24px;
justify-content: space-between;
`
const VerdiLaneSumStyle = styled.div`
padding-top: 64px;


`
const NedbetalingStyle = styled.div`
padding-top: 32px;
background: #FFFFFF;
`
    