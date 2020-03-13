import React, { useState } from "react";
import { SliderKeyboardInput } from "@staccx/bento";
import { useFormikContext } from "formik";

const KjopeVerdiInput = () => {
  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <SliderKeyboardInput
        label="KjopeVerdi"
        name="KjopeVerdi"
        min={100}
        max={500}
        step={50}
        defaultValue={250}
        onChange={value => setFieldValue("Inntekt", value)}
      />
    </div>
  );
};
export default KjopeVerdiInput;
