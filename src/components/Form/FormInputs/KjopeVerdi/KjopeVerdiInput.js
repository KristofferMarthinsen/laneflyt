import React, {useState} from "react";
import { SliderKeyboardInput } from "@staccx/bento";
import {useFormikContext} from "formik"

const KjopeVerdiInput = (name, ...props) => {
	const [Price, setPrice] = useState(0)

  const { setFieldValue } = useFormikContext()
  return (
    <div>
      <SliderKeyboardInput
        label="Sum Inntekt"
		name="KjopeVerdi"
        min={100}
        max={500}
        step={50}
        defaultValue={0}
        onChange={value => (setPrice(Price), setFieldValue("Inntekt", value))}
      />
    </div>
  );
};
export default KjopeVerdiInput;
