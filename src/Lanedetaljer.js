import React, { Component } from "react";
import Nedbetaling from "./components/Nedbetaling";
import VidereKnapp from "./components/VidereKnapp";
import { Slider, CurrencyInput } from "@staccx/bento";
import {VerdiLaneSum} from "./components/VerdiLaneSum"


export class Lanedetaljer extends Component {  
  render() {
    return (
      <div>
        <h1>Lånedetaljer</h1>
        <VerdiLaneSum/>
        <Nedbetaling/> 
        <VidereKnapp onClick={this.props.onNext} />
        
      </div>
    );
  }
}

export default Lanedetaljer;
