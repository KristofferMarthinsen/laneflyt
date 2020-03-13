import React, { useState } from "react";
import {Input,Button} from "@staccx/bento";
import LaneSum from "./Form/FormInputs/LaneSum/LameSumInput";
import BoligVerdi from "./Form/FormInputs/BoligVerdi/BoligVerdiInput";
import { Formik, Form } from "formik";
import SignupSchema from "./Form/FormInputs/NedbetalingForm.schema";
import NedbetalingstidInput from "./Form/FormInputs/NedbetalingsTidInput/NedbetalingsTidInput";
import AvdragsFrihetInput from "./Form/FormInputs/AvdragsFrihet/AvdragsFrihetInput";
export const Nedbetaling = () => {
  const [setNedbetaling] = useState(null);
  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        BoligVerdi: "",
        LaneSum: "",
        NedbetalingsTid: "",
        AvdragsFrihet: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
          console.log(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit, setFieldValue }) => {
        const Nedbetaling = value => {
          setFieldValue("Sikker", value);
          setNedbetaling(value === "true" ? true : false);
        };
        return (
          <div>
            <Form>
              <BoligVerdi />
              <LaneSum />
              <NedbetalingstidInput />
              <AvdragsFrihetInput/>
              <Input label={"Rente nominell:"} disabled />
              <Input label={"Rente effektiv:"} disabled />
              <Input label={"Å betale hver måned:"} disabled />
            </Form>
            <Button onClick={handleSubmit}> submit</Button>
          </div>
        );
      }}
    </Formik>
  );
};

export default Nedbetaling;
