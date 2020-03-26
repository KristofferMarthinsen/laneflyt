import React, { useState } from "react";
import { Button } from "@staccx/bento";
import { Redirect, Link } from "react-router-dom";
import { Gjeld2SVG } from "./svg/Gjeld2";
import Layout from "./components/Layout";
import { Formik, Form } from "formik";
import GjeldFormSchema from "./components/Form/FormInputs/GjeldForm.schema";
import LanGiverInput from "./components/Form/FormInputs/Langiver/LanGiverInput"
import LanType from "./components/Form/FormInputs/Langiver/LanType"
import LanGiverSumGjeld from "./components/Form/FormInputs/Langiver/LanGiverSumGjeld"


const Subtitle = () => (
  <>
    <p>
      Legg til samlet gjeld
    </p>
  </>
);

export const GjeldLeggTil = () => {
  const [setGjeld] = useState(null);
  const [fireRedirect, setFireRedirect] = useState(false);
  return (
    <Formik
      validationSchema={GjeldFormSchema}
      initialValues={{
       LanGiverInput: "",
       LanTypeInput:"",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
         localStorage.setItem("gjeld", JSON.stringify(values, null, 2));
          console.log(values);
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
      <Layout icon={Gjeld2SVG} id={7} title="Legg til gjeld" subtitle={Subtitle}/>
       <Form>
        <LanGiverInput/>
        <LanType/>
        <LanGiverSumGjeld/>
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
