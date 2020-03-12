import React, { useState } from "react"
import HusstandInput from "../../HusstandInputs"
import {Slider} from "@staccx/bento"



const KjopeVerdiInput = () => {
    const [KjopeVerdi, setKjopeVerdi] = useState(0);
	return (
		<div>
			<HusstandInput name={"KjopeVerdi"} label={"Kjøpesum"}value={KjopeVerdi || 0} onChange={e => setKjopeVerdi(e.target.value)}/>
            <Slider
            name={"Disabled"}
            onChange={e => setKjopeVerdi(e.target.value)}
            min={0}
           max={10000}
          step={1000}
      />
        </div>
	)
}
export default KjopeVerdiInput