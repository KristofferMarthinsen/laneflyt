import React, { Component } from "react";
import Nedbetaling from "./components/Nedbetaling";
import VidereKnapp from "./components/VidereKnapp"
import { Slider, Breadcrumb, CurrencyInput } from "@staccx/bento";

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
        <CurrencyInput label={"Boligverdi"} />
        <CurrencyInput label={"Lånesum"} />
        <Slider name="Disabled" onChange={e => console.log("Sliiiiide", e.target.value)} min={0} max={100} disabled />
        <Nedbetaling/> 
        <VidereKnapp/>
        
      </div>
    );
  }
}

export default Lanedetaljer;
