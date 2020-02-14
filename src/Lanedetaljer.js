import React, { Component } from "react";
import Nedbetaling from "./components/Nedbetaling";
import VidereKnapp from "./components/VidereKnapp";
import { Slider, Breadcrumb, CurrencyInput } from "@staccx/bento";
import VerdiLaneSum from "./components/VerdiLaneSum";


export class Lanedetaljer extends Component {  
  render() {
    return (
      <div>
        <h1>Lånedetaljer</h1>

        <Breadcrumb
          path={[
            {
              name: "First page",
              to: "/"
            },
            {
              name: "Second page",
              to: "/level-2"
            },
            {
              name: "Third page",
              to: "/level-3"
            },
            {
              name: "Fourth page"
            }
          ]}
        />
        <VerdiLaneSum/>
        <Nedbetaling/> 
        <VidereKnapp onClick={this.props.onNext} />
        
      </div>
    );
  }
}

export default Lanedetaljer;
