import React, { useState } from "react";
import { Button } from "@staccx/bento";
import { SikkerhetLeggTilSVG } from "./svg/SikkerhetLeggTilSVG";
import Layout from "./components/Layout";
import { Formik, Form } from "formik";
import SignupSchema from "./components/Form/FormInputs/SikkerhetForm.schema";
import AdresseInput from "./components/Form/FormInputs/Adresse/AdresseInput";
import KjopeVerdiInput from "./components/Form/FormInputs/KjopeVerdi/KjopeVerdiInput";
import BoligVerdiInput from "./components/Form/FormInputs/BoligVerdi/BoligVerdiInput";
import { laneflytCollection } from "./components/MongoDB";
import styled from 'styled-components'


export const SikkerhetLegTil = (value) => {




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

          const leggTil = {
            "$set": {
            Adresse: values.Adresse,
            BoligVerdi: values.BoligVerdi,
            KjopeVerdi: values.KjopeVerdi,
            }
            };


          const options = { returnNewDocument: true };
          laneflytCollection
            .findOneAndUpdate({"Id": "1"}, leggTil, options)
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
        }, 400);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <PopupStyling>
            <p>Legg til eiendel</p>
            <SikkerhetLeggTilSVG/>
            <Form>
              <AdresseInput />
              <BoligVerdiInput />
              <KjopeVerdiInput />
            </Form>
            <div className="navigationButtons">
              <Button className="nextBtn" type="submit" onClick={handleSubmit}>
                Lagre
              </Button>
            </div>
          </PopupStyling>
        );
      }}
    </Formik>
  );
};
export default SikkerhetLegTil;

const PopupStyling = styled.div`
    background-color: white;
    min-width: 375px;
    min-height: 500px;
    margin-left: 0px;
    padding-left: 0px;
   
    
`
