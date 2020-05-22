import React, { useState } from "react";
import { Button, CheckGroup, RadioButton } from "@staccx/bento";
import { Formik, Form } from "formik";
import { Redirect, Link } from "react-router-dom";
import FornavnInput from "../Form/FormInputs/fornavn/FornavnInput";
import EtternavnInput from "../Form/FormInputs/Etternavn/EtternavnInput";
import EpostInput from "../Form/FormInputs/Epost/EpostInput";
import SignupSchema from "../../components/Form/Schema/HusstandForm.schema";
import SivilStatusInput from "../Form/FormInputs/SivilStatus/SivilStatusInput";
import AntallBarnInput from "../Form/FormInputs/AntallBarn/AntallBarnInput";
import TelefonNummerInput from "../Form/FormInputs/Telefon/TelefonNummerInput";
import { laneflytCollection } from "../../MongoDB";
import styled from "styled-components";


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
        antallBarn: null,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // Set some fields in that document
          const leggTil = {


            $set: {
              Fornavn: values.Fornavn,
              Etternavn: values.Etternavn,
              Telefon: values.Telefon,
              Epost: values.Epost,
              SivilStatus: values.SivilStatus,
              barn: values.barn,
              BarnAlder: values.BarnAlder,
              AntallBarn: values.AntallBarn,
            },
          };

          const options = { returnNewDocument: true };

          laneflytCollection
            .findOneAndUpdate({ Id: "1" }, leggTil, options)
            .then((updatedDocument) => {
              if (updatedDocument) {
                console.log(
                  `Successfully updated document: ${updatedDocument}.`
                );
              } else {
                console.log("No document matches the provided query.");
              }
              return updatedDocument;
            })
            .catch((err) =>
              console.error(`Failed to find and update document: ${err}`)
            );

          setSubmitting(false);
          setFireRedirect(true);
        }, 400);
      }}
    >
      {({ handleSubmit, setFieldValue }) => {
        const handleBarn = (value) => {
          setFieldValue("barn", value);
          setBarn(value === "true" ? true : false);
        };
        return (
          <>
            

            <Form>
              <FornavnInput />
              <EtternavnInput />
              <TelefonNummerInput />
              <EpostInput />
              <SivilStatusInput />
              <p>Har du barn?</p>
              <JaNei>
              <CheckGroup
                label="Barn"
                name="barn"
                type="barn"
                onChange={(value) => handleBarn(value)}
                value={barn}
                group="barn"
              >
                <RadioButton
                  key="ja"
                  value={true}
                  id="1"
                  onChange={() => setBarn(true)}
                >
                  Ja
                </RadioButton>
                <RadioButton key="nei" id="2" value={false}>
                  Nei
                </RadioButton>
              </CheckGroup>
              </JaNei>
              {barn && (
                <>
                  <p>Antall barn </p>
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

const JaNei = styled.div`
  display: inline-flex;
  width: 150px;
  justify-content: space-between;
`


