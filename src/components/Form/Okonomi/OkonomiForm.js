import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import { Button } from "@staccx/bento";
import { Formik, Form } from "formik";
import KjopeVerdiInput from "../FormInputs/KjopeVerdi/KjopeVerdiInput";
import AntallBilerInput from "../FormInputs/AntallBiler/AntallBilerInput";
import AntallBoligerInput from "../FormInputs/AntallBoliger/AntallBoligerInput";
//import SignupSchema from "./FormInputs/HusstandForm.schema";

export const OkonomiForm = ({ next }) => {
  const [fireRedirect, setFireRedirect] = useState(false);
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
          localStorage.setItem("Okonomi", JSON.stringify(values, null, 2));
          setSubmitting(false);
          setFireRedirect(true);
        }, 400);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <Form>
            <KjopeVerdiInput />
            <AntallBilerInput />
            <AntallBoligerInput />
            <Button className="videreKnapp" type="submit" onClick={handleSubmit}>
              Videre
            </Button>
            {fireRedirect && <Redirect to={next} />}
          </Form>
        );
      }}
    </Formik> 
  );
};

export default OkonomiForm;
