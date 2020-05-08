import React, { useState } from "react";
import { SliderKeyboardInput, formatting } from "@staccx/bento";
import { useFormikContext } from "formik";

const LaneSumInput = () => {
  const [LaneSum, setLaneSum] = useState(0);
  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <SliderKeyboardInput
        label="Ønsket lån"
        name="LaneSum"
        min={25000}
        max={15000000}
        step={125000}
        defaultValue={4400000}
        onChange={value => (
          setLaneSum(LaneSum), setFieldValue("LaneSum", value)
        )}
       
      ></SliderKeyboardInput>
    </div>
  );
};
export default LaneSumInput;
