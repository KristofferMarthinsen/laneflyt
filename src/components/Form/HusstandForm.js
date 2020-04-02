import React, { useState } from "react";
import { Button, CheckGroup, RadioButton } from "@staccx/bento";
import { Formik, Form } from "formik";
import { Redirect, Link } from "react-router-dom";
import FornavnInput from "./FormInputs/fornavn/FornavnInput";
import EtternavnInput from "./FormInputs/Etternavn/EtternavnInput";
import EpostInput from "./FormInputs/Epost/EpostInput";
import SignupSchema from "./FormInputs/HusstandForm.schema";
import SivilStatusInput from "./FormInputs/SivilStatus/SivilStatusInput";
import AntallBarnInput from "./FormInputs/AntallBarn/AntallBarnInput";
import TelefonNummerInput from "./FormInputs/Telefon/TelefonNummerInput";
import styled from "styled-components";
import {Stitch} from "mongodb-stitch-browser-sdk";

export const HusstandForm = ({ next }) => {
  const [barn, setBarn] = useState(false);
  const [fireRedirect, setFireRedirect] = useState(false);
  
  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        Fornavn: "",
        Etternavn: "",
        Telefon: "",
        Epost: "",
        SivilStatus: null,
        barn: barn,
        BarnAlder: null,
        antallBarn: null
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          
          itemsCollection //hvor skal vi hente itemsCollection fra?
            .insertOne(values)
            .then(result =>
              console.log(
                `Successfully inserted item with _id: ${result.insertedId}`
              )
            )
            .catch(err => console.error(`Failed to insert item: ${err}`));
          setSubmitting(false);
          setFireRedirect(true);
        }, 400);
      }}
    >
      {({ handleSubmit, setFieldValue }) => {
        const handleBarn = value => {
          setFieldValue("barn", value);
          setBarn(value === "true" ? true : false);
        };
        return (
          <>
            <Lanetakere>
              <Button autoFocus variant="topButton" id="hoved">
                Hovedlåntaker
              </Button>
              <Button variant="topButton" id="med">
                Medlåntaker
              </Button>
            </Lanetakere>
            <Form>
              <FornavnInput />
              <EtternavnInput />
              <TelefonNummerInput />
              <EpostInput />
              <SivilStatusInput />
              <p>Har du barn?</p>
              <CheckGroup
                label="Barn"
                name="barn"
                type="barn"
                onChange={value => handleBarn(value)}
                value={barn}
                group="barn"
              >
                <RadioButton value={true} id="1" onChange={() => setBarn(true)}>
                  Ja
                </RadioButton>
                <RadioButton id="2" value={false}>
                  Nei
                </RadioButton>
              </CheckGroup>
              {barn && (
                <>
                  <p>antall barn </p>
                  <AntallBarnInput />
                </>
              )}
              <div className="navigationButtons">
                <Button
                  className="nextBtn"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Videre
                </Button>
                {fireRedirect && <Redirect to={next} />}

                <Link to="/Nedbetalingsplan">
                  <Button className="payplanBtn" variant="unstyledButton">
                    Nedbetalingsplan >
                  </Button>
                </Link>
              </div>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default HusstandForm;

const Lanetakere = styled.div`
  width: 225px;
  margin-bottom: 45px;
  button {
    min-height: 40px;
    min-width: 112px;
    padding: 0px;
    text-align: center;
    line-height: 10px;
    font-weight: 500;
    font-size: 14px;
    border: 2px solid #146670;
    box-sizing: border-box;
  }
  button:focus {
    background-color: #146670;
  }
  #hoved {
    border-radius: 4px 0px 0px 4px;
  }
  #med {
    border-radius: 0px 4px 4px 0px;
  }
`;
