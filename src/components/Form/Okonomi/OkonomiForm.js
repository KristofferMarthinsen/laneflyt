import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "@staccx/bento";
import { Formik, Form } from "formik";
import SamletInntekt from "../FormInputs/SamletInntekt/SamletInntekt";
import AntallBilerInput from "../FormInputs/AntallBiler/AntallBilerInput";
import AntallBoligerInput from "../FormInputs/AntallBoliger/AntallBoligerInput";
import { laneflytCollection } from "../../../MongoDB"
import styled from "styled-components";


export const OkonomiForm = ({ next }) => {
  const [fireRedirect, setFireRedirect] = useState(false);
  

  return (
   
    <Formik
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
            <Wrapper>
            <SamletInntekt />
            <AntallBilerInput />
            <AntallBoligerInput />
            </Wrapper>
            <div className="navigationButtons">
            <Button className="videreKnapp" type="submit" onClick={handleSubmit}>
              Videre
            </Button>
            {fireRedirect && <Redirect to={next} />}
            </div>
            
          </Form>
          
        );
      }}
    </Formik> 
  );
};

export default OkonomiForm;

const Wrapper = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`