import React, { useState } from "react";
import { SliderKeyboardInput } from "@staccx/bento";
import { useFormikContext } from "formik";

const LaneSumInput = () => {
  const [LaneSum, setLaneSum] = useState(0);
  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <SliderKeyboardInput
        label="Ønsket lånebeløp"
        name="LaneSum"
        min={15000000}
        max={25000}
        step={125000}
        defaultValue={100}
        onChange={value => (
          setLaneSum(LaneSum), setFieldValue("LaneSum", value)
        )}
       
      />
    </div>
  );
};
export default LaneSumInput;
