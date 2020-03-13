import React, { useState } from "react";
import LaneSum from "./Form/FormInputs/LaneSum/LameSumInput";
import BoligVerdi from "./Form/FormInputs/BoligVerdi/BoligVerdiInput";
import { Formik, Form } from "formik";
import SignupSchema from "./Form/FormInputs/NedbetalingForm.schema";
import NedbetalingstidInput from "./Form/FormInputs/NedbetalingsTidInput/NedbetalingsTidInput";

export const Nedbetaling = () => {
  const [setNedbetaling] = useState(null);
  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        BoligVerdi: "",
        LaneSum: "",
        Nedbetalingstid: ""
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
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Nedbetaling;
