import React, { useState } from "react";
import { Slider, Breadcrumb, CurrencyInput, Expand } from "@staccx/bento";

export const VerdiLaneSum = () => {
    const  [ BoligVerdi, setBoligVerdi ] = useState(0)  
    const [ LaneSum, setLaneSum ] = useState(0)
  

    return (
      <div>
        <CurrencyInput label={"Boligverdi"} value={BoligVerdi || 0} onChange={e => setBoligVerdi(e.target.value)}/>
        <CurrencyInput label={"Lånesum"} value={LaneSum || 0} />

        <Slider
          name={"Disabled"}
          onChange={e => setBoligVerdi(e.target.value)}
          min={0}
          max={10000}
          step={1000}
        />
        <Slider
          name={"wsddfs"}
          onChange={e => setLaneSum(e.target.value)}
          min={0}
          max={10000}
          step={1000}
        />

        
      </div>
    );
}

