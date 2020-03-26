import React, { useState } from "react";
import { SliderKeyboardInput } from "@staccx/bento";
import { useFormikContext } from "formik";

const LanGiverSumGjeld = (name, ...props) => {
  const [SumGjeld, setSumGjeld] = useState(0);

  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <SliderKeyboardInput
        label="Sum gjeld"
        name="SumGjeld"
        min={100}
        max={500}
        step={50}
        defaultValue={0}
        onChange={value => (
          setSumGjeld(SumGjeld), setFieldValue("Sumgjeld", value)
        )}
      />
    </div>
  );
};
export default LanGiverSumGjeld;
