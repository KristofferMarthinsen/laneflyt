import React, { useState } from "react";
import { SliderKeyboardInput } from "@staccx/bento";
import { useFormikContext } from "formik";

const LaneSumInput = (name, ...props) => {
  const [setLaneSum] = useState(0);
  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <SliderKeyboardInput
        label="Lånesum"
        name="LaneSum"
        min={100}
        max={500}
        step={50}
        defaultValue={250}
        onChange={value => (
          setLaneSum(value), setFieldValue("LaneSum", value)
        )}
      />
    </div>
  );
};
export default LaneSumInput;
