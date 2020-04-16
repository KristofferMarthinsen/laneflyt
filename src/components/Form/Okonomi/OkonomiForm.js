import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "@staccx/bento";
import { Formik, Form } from "formik";
import SamletInntekt from "../FormInputs/SamletInntekt/SamletInntekt";
import AntallBilerInput from "../FormInputs/AntallBiler/AntallBilerInput";
import AntallBoligerInput from "../FormInputs/AntallBoliger/AntallBoligerInput";
import { laneflytCollection } from "../../../components/MongoDB"
//import SignupSchema from "./FormInputs/HusstandForm.schema";

export const OkonomiForm = ({ next }) => {
  const [fireRedirect, setFireRedirect] = useState(false);
  const query = { test: "test" };

  return (
    <Formik
      //validationSchema={SignupSchema}
      initialValues={{
        SamletInntekt: "",
        antallBiler: null,
        antallBolig: null
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const leggTil = {
            $set: {
              SamletInntekt: values.SamletInntekt,
              antallBiler: values.antallBiler,
              antallBolig: values.antallBolig
            }
          };

          const options = { returnNewDocument: true };
          laneflytCollection
            .findOneAndUpdate({ Id: "1" }, leggTil, options)
            .then(updatedDocument => {
              if (updatedDocument) {
                console.log(
                  `Successfully updated document: ${updatedDocument}.`
                );
              } else {
                console.log("No document matches the provided query.");
              }
              return updatedDocument;
            })
            .catch(err =>
              console.error(`Failed to find and update document: ${err}`)
            );

          setSubmitting(false);
          setFireRedirect(true);
        }, 400);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <Form>
            <SamletInntekt />
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
