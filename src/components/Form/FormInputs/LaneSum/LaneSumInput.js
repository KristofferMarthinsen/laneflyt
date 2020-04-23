import React, { useState } from "react";
import { SliderKeyboardInput } from "@staccx/bento";
import { useFormikContext } from "formik";

const LaneSumInput = () => {
  const [LaneSum, setLaneSum] = useState(0);
  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <SliderKeyboardInput
        label="Lånesum"
        name="LaneSum"
        min={100}
        max={500}
        step={50}
        defaultValue={100}
        onChange={value => (
          setLaneSum(LaneSum), setFieldValue("LaneSum", value)
        )}
       
      />
    </div>
  );
};
export default LaneSumInput;
