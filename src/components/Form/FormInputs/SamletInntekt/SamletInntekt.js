import React, { useState } from "react";
import { SliderKeyboardInput } from "@staccx/bento";
import { useFormikContext } from "formik";

const SamletInntekt = (name, ...props) => {
  const [SamletInntekt, setSamletInntekt] = useState(0);

  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <SliderKeyboardInput
        label="Samlet Inntekt"
        name="SamletInntekt"
        min={100}
        max={500}
        step={50}
        defaultValue={0}
        onChange={value => (
          setSamletInntekt(SamletInntekt), setFieldValue("SamletInntekt", value)
        )}
      />
    </div>
  );
};
export default SamletInntekt;
