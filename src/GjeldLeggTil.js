import React, { useState } from "react";
import { Button } from "@staccx/bento";
import { Redirect } from "react-router-dom";
import { Gjeld2SVG } from "./svg/Gjeld2";
import Layout from "./components/Layout";
import { Formik, Form } from "formik";
import GjeldFormSchema from "./components/Form/FormInputs/GjeldForm.schema";
import LanGiverInput from "./components/Form/FormInputs/Langiver/LanGiverInput";
import LanTypeInput from "./components/Form/FormInputs/Langiver/LanType";
import SumGjeld from "./components/Form/FormInputs/Langiver/LanGiverSumGjeld";
import { laneflytCollection } from "./components/MongoDB";

const Subtitle = () => (
  <>
    <p>Legg til samlet gjeld</p>
  </>
);

export const GjeldLeggTil = () => {
  const [setGjeld] = useState(null);
  const [fireRedirect, setFireRedirect] = useState(false);
  const query = { Fornavn: "Helene" };

  return (
    <Formik
      validationSchema={GjeldFormSchema}
      initialValues={{
        LanGiverInput: "",
        LanTypeInput: "",
        SumGjeld: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const leggTil = {
            $set: {
              LanGiverInput: values.LanGiverInput,
              LanTypeInput: values.LanTypeInput,
              SumGjeld: values.SumGjeld
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
      {({ handleSubmit, setFieldValue }) => {
        const Gjeld = value => {
          setFieldValue("Sikker", value);
          setGjeld(value === "true" ? true : false);
        };
        return (
          <div>
            <Layout
              icon={Gjeld2SVG}
              id={7}
              title="Legg til gjeld"
              subtitle={Subtitle}
            />
            <Form>
              <LanGiverInput />
              <LanTypeInput />
              <SumGjeld />
            </Form>
            <div className="navigationButtons">
              <Button className="nextBtn" type="submit" onClick={handleSubmit}>
                Lagre
              </Button>
              {fireRedirect && <Redirect to={"/Gjeld"} />}
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default GjeldLeggTil;
