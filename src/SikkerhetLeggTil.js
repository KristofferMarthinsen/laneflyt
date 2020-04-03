import React, { useState } from "react";
import { Button } from "@staccx/bento";
import { Redirect } from "react-router-dom";
import { SikkerhetLeggTilSVG } from "./svg/SikkerhetLeggTilSVG";
import Layout from "./components/Layout";
import { Formik, Form } from "formik";
import SignupSchema from "./components/Form/FormInputs/SikkerhetForm.schema";
import AdresseInput from "./components/Form/FormInputs/Adresse/AdresseInput";
import KjopeVerdiInput from "./components/Form/FormInputs/KjopeVerdi/KjopeVerdiInput";
import BoligVerdiInput from "./components/Form/FormInputs/BoligVerdi/BoligVerdiInput";
import { laneflytCollection } from "./components/MongoDB";

const Subtitle = () => (
  <>
    <p>Her kan du legge til sikkerheit</p>
  </>
);

export const SikkerhetLegTil = () => {
  const [fireRedirect, setFireRedirect] = useState(false);
  const query = { test: "test" };

  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        Adresse: "",
        BoligVerdi: "",
        KjopeVerdi: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const options = { returnNewDocument: true };
          laneflytCollection
            .findOneAndUpdate(query, values, options)
            .then(updatedDocument => {
              if (updatedDocument) {
                console.log(
                  `Successfully updated document: ${updatedDocument}.`
                );
              } else {
                console.log("No document matches the provided query.");
                console.log(values)
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
          <div>
            <Form>
              <Layout
                icon={SikkerhetLeggTilSVG}
                id={6}
                title="Legg til Sikkerheit"
                subtitle={Subtitle}
              ></Layout>
              <AdresseInput />
              <BoligVerdiInput />
              <KjopeVerdiInput />
            </Form>
            <div className="navigationButtons">
              <Button className="nextBtn" type="submit" onClick={handleSubmit}>
                Lagre
              </Button>
              {fireRedirect && <Redirect to={"/Sikkerhet"} />}
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default SikkerhetLegTil;
