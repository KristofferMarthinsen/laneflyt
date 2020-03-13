import React from "react";
import { Button } from "@staccx/bento";
import { Formik, Form } from "formik";
import KjopeVerdiInput from "../FormInputs/KjopeVerdi/KjopeVerdiInput"
import AntallBilerInput from "../FormInputs/AntallBiler/AntallBilerInput";
import AntallBoligerInput from "../FormInputs/AntallBoliger/AntallBoligerInput";
//import SignupSchema from "./FormInputs/HusstandForm.schema";

export const OkonomiForm = () => {
  return (
    <Formik
      //validationSchema={SignupSchema}
      initialValues={{
        Inntekt: "",
        antallBiler: null,
        antallBolig: null
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit}) => {
        
        return (
          <Form>
            <KjopeVerdiInput/>
            <AntallBilerInput/>
            <AntallBoligerInput/>
            <Button onClick={handleSubmit}> submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default OkonomiForm;
