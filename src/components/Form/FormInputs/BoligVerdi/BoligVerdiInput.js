import React, { useState } from "react";
import { SliderKeyboardInput } from "@staccx/bento";
import { useFormikContext } from "formik";

const BoligVerdiInput = (name, ...props) => {
  const [boligVerdi, setBoligVerdi] = useState(0);

  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <SliderKeyboardInput
        label="Prisantydning ny bolig"
        name="BoligVerdi"
        min={25000}
        max={15000000}
        step={1250000}
        defaultValue={5500000}
        onChange={value => (
          setBoligVerdi(boligVerdi), setFieldValue("BoligVerdi", value)
        )}
      />
    </div>
  );
};
export default BoligVerdiInput;
