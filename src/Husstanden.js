import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import {
  Button,
  Input,
  SelectSimple,
  CheckBox,
  RadioPillItem,
  Heading,
  RadioPill
} from "@staccx/bento";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const SignupSchema = Yup.object().shape({
  fornavn: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  etternavn: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  telefonnummer: Yup.string()
  .matches(phoneRegExp, 'Phone number is not valid')
  
});


export const barn = [
  {
    myUniqueId: "221e98j",
    value: 1,
    label: "1",
    defaultChecked: true
  },
  {
    myUniqueId: "ads31",
    value: 2,
    label: "2",
    defaultChecked: false
  },
  {
    myUniqueId: "h14",
    value: 3,
    label: "3 ",
    defaultChecked: false
  },
  {
    myUniqueId: "h14asdsdf",
    value: 4,
    label: "4",
    defaultChecked: false
  },
  {
    myUniqueId: "h14dsfgdfgsd",
    value: 5,
    label: "5 +",
    defaultChecked: false
  }
];

export const Husstanden = () => {
  return (
    <div>
      <Layout id={3} title="Husstanden" />

      <Button variant="topButton">Hovedlåntaker</Button>
      <Button variant="topButton">Medlåntaker</Button>

      <InputStyles>
        <Formik
          validationSchema={SignupSchema}
          initialValues={{
            fornavn: "",
            etternavn: "",
            email: "",
            telefonnummer: "",
            sivilstatus: "",
            barn: false
          }}
          validate={values => {
            const errors = {};
            if(!values.fornavn){
              errors.fornavn = "Required";
            }
            if(!values.etternavn){
              errors.etternavn= "Required";
            }
            if(!values.telefonnummer){
              errors.telefonnummer= "Required";
            } 

            
    
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => {
            console.log("errors", errors)
            return (
              <form onSubmit={handleSubmit}>
              {errors.fornavn && touched.fornavn && errors.fornavn}
                <Input
                  type="fornavn"
                  name="fornavn"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fornavn}
                  label="Fornavn"
                />
                 {errors.etternavn && touched.etternavn && errors.etternavn}
                <Input
                  type="etternavn"
                  name="etternavn"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.etternavn}
                  label="Etternavn"
                />
                 {errors.telefonummer && touched.telefonnummer && errors.telefonnummer}
                <Input
                  type="telefonnummer"
                  name="telefonnummer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.telefonnummer}
                  label="Telefonnummer"
                />
                {errors.email && touched.email && errors.email}
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  label="E-mail"
                />
               
                <SelectSimple
                  label="Sivilstatus"
                  name="sivilstatus"
                  type="sivilstatus"
                  placeholder="Velg..."
                  id="simpleSelect"
                  component="select"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sivilstatus}
                >
                  <option value="Gift" name="gift">
                    Gift
                  </option>
                  <option value="Samboer">Samboer</option>
                  <option value="Skilt">Skilt</option>
                  <option value="Partnerskap">Partnerskap</option>
                  <option value="Enke">Enke/Enkemann</option>
                  <option value="Separert">Separert</option>
                </SelectSimple>
                <p>Har du barn under 18 år ?</p>
                <CheckBox value={true} id="1ID" group="Ja">
                  Ja{" "}
                </CheckBox>
                <CheckBox value={false} id="2ID" group="Nei">
                  Nei{" "}
                </CheckBox>
                <p>Antall barn</p>
                <RadioPill group={"Radiopills"}>
                  {barn.map(listItem => (
                    <RadioPillItem
                      key={listItem.myUniqueId}
                      value={listItem.value}
                      defaultChecked={listItem.defaultChecked}
                      id={listItem.myUniqueId}
                    >
                      {listItem.label}
                    </RadioPillItem>
                  ))}
                </RadioPill>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>{" "}
              </form>
            );
          }}
        </Formik>
      </InputStyles>
      <Buttons>
        <Link to="/Legitimering">
          <Button>Videre</Button>
        </Link>
        <Link to="/Nedbetalingsplan">
          <Button variant="unstyledButton">Nedbetalingsplan</Button>
        </Link>
      </Buttons>
    </div>
  );
};
export default Husstanden;

const Buttons = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  padding-left: 24px;
  justify-content: space-between;
`;

const InputStyles = styled.div`
  padding-top: 24px;
  input {
    display: flex;
    flex-direction: column;
    wrap: nowrap;
    align-items: space-between;
  }
`;
