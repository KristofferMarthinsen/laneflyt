import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Input, Button } from "@staccx/bento";
import LaneSum from "./Form/FormInputs/LaneSum/LaneSumInput";
import BoligVerdiInput from "./Form/FormInputs/BoligVerdi/BoligVerdiInput";
import { Formik, Form } from "formik";
import SignupSchema from "./Form/Schema/NedbetalingForm.schema";
import NedbetalingstidInput from "./Form/FormInputs/NedbetalingsTidInput/NedbetalingsTidInput";
import AvdragsFrihetInput from "./Form/FormInputs/AvdragsFrihet/AvdragsFrihetInput";
import styled from "styled-components";
import { laneflytCollection } from "./MongoDB";
import NominellRenteInput from "./Form/FormInputs/NominellRente/NominellRenteInput";

export const Nedbetaling = ({ next }) => {
  const [setNedbetaling] = useState(null);
  const [fireRedirect, setFireRedirect] = useState(false);

  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        Id: "1",
        BoligVerdi: "",
        LaneSum: "",
        NedbetalingsTid: "",
        AvdragsFrihet: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          laneflytCollection
            .insertOne(values)
            .then(result => {
              console.log(`Created`, result);
            })
            .catch(err => console.log("wrong", err));
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
            <Wrapper>
              <Form>
                <BoligVerdiInput />
                <LaneSum />
                <NedbetalingsPris>
                  <NedbetalingstidInput />
                  <AvdragsFrihetInput />
                </NedbetalingsPris>
                <NominellRenteInput />
                <p>
                  Å betale hver måned: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 9897,-
                </p> {
                  //Ekstremt midlertidig måte å skrive mellomrom på
                }
              </Form>
            </Wrapper>
            <div className="navigationButtons">
              <Button className="nextBtn" type="submit" onClick={handleSubmit}>
                Videre
              </Button>
              {fireRedirect && <Redirect to={next} />}

              <Link to="/Nedbetalingsplan">
                <Button className="payplanBtn" variant="unstyledButton">
                  Nedbetalingsplan >
                </Button>
              </Link>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Nedbetaling;

const Wrapper = styled(Form)`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 430px;
  }
`;

const NedbetalingsPris = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  select {
    width: 140px;
  }
`;

const Buttons = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  padding-left: 24px;
  justify-content: space-between;
`;
