import React, { useState } from "react";
import { Button } from "@staccx/bento";
import { Link } from "react-router-dom";
import { SikkerhetLeggTilSVG } from "./svg/SikkerhetLeggTilSVG";
import Layout from "./components/Layout";
import { Formik, Form } from "formik";
import SignupSchema from "./components/Form/FormInputs/SikkerhetForm.schema";
import AdresseInput from "./components/Form/FormInputs/Adresse/AdresseInput";
import KjopeVerdiInput from "./components/Form/FormInputs/KjopeVerdi/KjopeVerdiInput";
import BoligVerdiInput from "./components/Form/FormInputs/BoligVerdi/BoligVerdiInput";

const Subtitle = () => (
  <>
    <p>Her kan du legge til sikkerheit</p>
  </>
);

export const SikkerhetLegTil = () => {
  const [ setSikkerhet] = useState(null);
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
          console.log(values);
          alert(JSON.stringify(values, null, 2));
          console.log(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit, setFieldValue }) => {
       

        return (
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

            <Button onClick={handleSubmit}> Submit</Button>
            <Link to="Sikkerhet">
              <Button>Lagre</Button>
            </Link>
          </Form>
        );
      }}
    </Formik>
  );
};
export default SikkerhetLegTil;
