import React, { Component } from "react";
import Nedbetaling from "./components/Nedbetaling";
import VidereKnapp from "./components/VidereKnapp";
<<<<<<< Updated upstream
import { Slider, Breadcrumb, CurrencyInput } from "@staccx/bento";
=======
import VerdiLaneSum from "./components/VerdiLaneSum";
import { Breadcrumb } from "@staccx/bento";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
        <CurrencyInput label={"Boligverdi"} />
        <CurrencyInput label={"Lånesum"} />
        <Slider
          name="Disabled"
          onChange={e => console.log("Sliiiiide", e.target.value)}
          min={500000}
          max={20000000}
        />
        <Nedbetaling />
        <VidereKnapp onClick={this.props.onNext} />
=======
        <VerdiLaneSum/>
        <Nedbetaling/> 
        <VidereKnapp/>
        
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default Lanedetaljer;
