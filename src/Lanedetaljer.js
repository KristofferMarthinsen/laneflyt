import React from "react";
import styled from "styled-components"
import Nedbetaling from "./components/Nedbetaling";
import {VerdiLaneSum} from "./components/VerdiLaneSum";
import {Button} from "@staccx/bento";
import {Link} from "react-router-dom";
import Layout from "./components/Layout";

export const Lanedetaljer = () =>  {  
    return (
        <div>
        <Layout id={1} title="Lånedetaljer" icon={null} subtitle = {null} />
        <VerdiLaneSum/>
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


export default Lanedetaljer;

// const Lånesum = styled.h1`
// padding-left: 6px;
// `

 const Buttons = styled.div`
 padding-top: 32px;
 display: flex;
 flex-direction: row;
padding-left: 24px;
 justify-content: space-between;
 `
 
 const NedbetalingStyle = styled.div`
 padding-top: 32px;
 background: #FFFFFF;
 `
    