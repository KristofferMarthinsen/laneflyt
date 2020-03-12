import React from "react"
import HusstandInput from "../../HusstandInputs"
import {Slider} from "@staccx/bento"
import {useFormikContext } from "formik"



const BoligVerdiInput = (name, ...props) => {
    const { setFieldValue } = useFormikContext()
	return (
		<div>
            <HusstandInput name={"Boligverdi"} label={"Boligverdi"}value={setFieldValue || 0}/>
            <Slider
            {...props}
            onChange={e => setFieldValue(name, e.target.value)}
            min={0}
           max={10000}
          step={1000}
      />
		</div>
	)
}
export default BoligVerdiInput