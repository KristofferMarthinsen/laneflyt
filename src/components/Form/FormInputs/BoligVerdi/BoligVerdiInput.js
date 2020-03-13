import React, {useState} from "react"
import {SliderKeyboardInput} from "@staccx/bento"
import {useFormikContext } from "formik"



const BoligVerdiInput = (name, ...props) => {
    const [boligVerdi, setBoligVerdi] = useState(0)

    const { setFieldValue } = useFormikContext()
	return (
		<div>
        <SliderKeyboardInput
        label="Boligverdi"
		name="BoligVerdi"
        min={100}
        max={500}
        step={50}
        defaultValue={250}
        onChange={value => (setBoligVerdi(value), setFieldValue("BoligVerdi", value))}
      />
           
		</div>
	)
}
export default BoligVerdiInput