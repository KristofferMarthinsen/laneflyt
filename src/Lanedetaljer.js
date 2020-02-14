import React, { Component } from "react";
import styled from "styled-components"
import Nedbetaling from "./components/Nedbetaling";
import VidereKnapp from "./components/VidereKnapp";
import {VerdiLaneSum} from "./components/VerdiLaneSum";


export class Lanedetaljer extends Component {  
  render() {
    return (
      <Wrapper>
        <Header> Lånedetaljer</Header>
        <VerdiLaneSum/>
        <Nedbetaling/> 
        <VidereKnapp onClick={this.props.onNext} />
        
      </Wrapper>
    );
  }
}

export default Lanedetaljer;

const Header = styled.h1`
    color: red;
    `
const Wrapper = styled.div`
    background-color: red;



`
    