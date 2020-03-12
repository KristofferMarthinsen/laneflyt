import React, { useState } from "react"
import HusstandInput from "../../HusstandInputs"
import {Slider} from "@staccx/bento"



const BoligVerdiInput = () => {
     const [BoligVerdi, setBoligVerdi] = useState(0);
	return (
		<div>
			<HusstandInput name={"BoligVerdi"} label={"Boligverdi"}/>
            <Slider
            name={"Disabled"}
            onChange={e => setBoligVerdi(e.target.value)}
            min={0}
           max={10000}
          step={1000}
      />
		</div>
	)
}
export default BoligVerdiInput