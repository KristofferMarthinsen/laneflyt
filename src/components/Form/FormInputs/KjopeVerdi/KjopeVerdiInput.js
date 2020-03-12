import React, { useState } from "react";
import HusstandInput from "../../HusstandInputs";
import { SliderKeyboardInput } from "@staccx/bento";

const KjopeVerdiInput = () => {
  const [KjopeVerdi, setKjopeVerdi] = useState(0);
  return (
    <div>
      <SliderKeyboardInput
        label="KjopeVerdi"
        min={100}
        max={500}
        step={50}
        defaultValue={250}
        onChange={e => setKjopeVerdi(e.target.value)}
      />
    </div>
  );
};
export default KjopeVerdiInput;
