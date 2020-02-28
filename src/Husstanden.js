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
          initialValues={{
            fornavn: "",
            etternavn: "",
            email: "",
            telefonnummer: ""
          }}
          validate={values => {
            const errors = {};
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
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="fornavn"
                name="fornavn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fornavn}
              />
              
              <input
                type="etternavn"
                name="etternavn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.etternavn}
              />
              
              <input
                type="telefonnummer"
                name="telefonnummer"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telefonnummer}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>

        <SelectSimple
          label={"Sivilstatus"}
          placeholder="Velg..."
          id="simpleSelect"
        >
          <option value={1}>Gift </option>
          <option value={2}>Samober</option>
          <option value={3}>Skilt</option>
          <option value={4}>Partnerskap</option>
          <option value={5}>Enke/Enkemann</option>
          <option value={6}>Separert</option>
        </SelectSimple>
        <p>Har du barn under 18 år ?</p>
        <CheckBox id="1ID" group="Ja">
          Ja{" "}
        </CheckBox>
        <CheckBox id="2ID" group="Nei">
          Nei{" "}
        </CheckBox>
        <p>Antall barn</p>
      </InputStyles>

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
  display: flex;
  flex-direction: column;
  wrap: nowrap;
  align-items: space-between;
`;
