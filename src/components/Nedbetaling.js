import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Input, Button } from "@staccx/bento";
import LaneSum from "./Form/FormInputs/LaneSum/LaneSumInput";
import BoligVerdiInput from "./Form/FormInputs/BoligVerdi/BoligVerdiInput";
import { Formik, Form } from "formik";
import SignupSchema from "./Form/FormInputs/NedbetalingForm.schema";
import NedbetalingstidInput from "./Form/FormInputs/NedbetalingsTidInput/NedbetalingsTidInput";
import AvdragsFrihetInput from "./Form/FormInputs/AvdragsFrihet/AvdragsFrihetInput";
import styled from "styled-components";

export const Nedbetaling = ({ next }) => {
  const [setNedbetaling] = useState(null);
  const [fireRedirect, setFireRedirect] = useState(false);
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
          localStorage.setItem("nedbetaling", JSON.stringify(values, null, 2));
          console.log(values);
          setSubmitting(false);
          setFireRedirect(true);
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
              <BoligVerdiInput />
              <LaneSum />
              <NedbetalingsPris>
                <NedbetalingstidInput />
                <AvdragsFrihetInput />
                <Input label={"Rente nominell:"} disabled />
                <Input label={"Rente effektiv:"} disabled />
                <Input label={"Å betale hver måned:"} disabled />
              </NedbetalingsPris>
            </Form>
            <div className="navigationButtons">
            <Button className="nextBtn" type="submit" onClick={handleSubmit}>
              Videre
            </Button>
            {fireRedirect && <Redirect to={next} />}
           
        <Link to="/Nedbetalingsplan">
          <Button className="payplanBtn" variant="unstyledButton">Nedbetalingsplan ></Button>
        </Link>
      </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Nedbetaling;

const NedbetalingsPris = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 16px rgba(0, 0, 75, 0.02),
    0px 8px 8px rgba(0, 0, 75, 0.02), 0px 4px 7px rgba(0, 0, 75, 0.021),
    0px 2px 2px rgba(0, 0, 75, 0.021), 0px 32px 22px rgba(0, 0, 75, 0.021),
    0px 44px 64px rgba(0, 0, 75, 0.02);
  border-radius: 2px;
`;

const Buttons = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  padding-left: 24px;
  justify-content: space-between;
`;

