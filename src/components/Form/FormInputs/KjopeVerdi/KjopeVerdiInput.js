import React from "react";
import { SliderKeyboardInput } from "@staccx/bento";
import {useFormikContext} from "formik"

const KjopeVerdiInput = () => {

  const { setFieldValue } = useFormikContext()
  return (
    <div>
      <SliderKeyboardInput
        label="KjopeVerdi"
        min={100}
        max={500}
        step={50}
        defaultValue={250}
        onChange={value => setFieldValue(value)}
      />
    </div>
  );
};
export default KjopeVerdiInput;
