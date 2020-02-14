import React, { Component } from "react";
import { Slider, Breadcrumb, CurrencyInput } from "@staccx/bento";

export class VerdiLaneSum extends Component {
  
    state = {
        sum: null,
        max: 1000000,
        min: 100000,
        step: 10000
    }
  
    sliderValue = e => {
    const verdi = e.target.value;
    console.log(verdi);

    this.setState({
        sum: verdi
    })

    console.log(verdi)

  };

  

  render() {
    return (
      <div>
        <CurrencyInput label={"Boligverdi"} value={this.state.sum} />
        <CurrencyInput label={"Lånesum"} />
        <Slider
          name="Disabled"
          onChange={e => this.sliderValue(e)}
          min={this.state.min}
          max={this.state.max}
          step={this.state.step}
        />
      </div>
    );
  }
}

export default VerdiLaneSum;
