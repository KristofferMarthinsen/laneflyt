import React, { useState } from "react";
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
  RadioPill,
  CheckGroup,
  RadioButton
} from "@staccx/bento";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import HusstandForm from "./components/Form/HusstandForm"

export const Husstanden = () => {
  return (
    <div>
      <Layout id={3} title="Husstanden" />

      <Button variant="topButton">Hovedlåntaker</Button>
      <Button variant="topButton">Medlåntaker</Button>
      <HusstandForm/>

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

{
  /* <CheckGroup
                
value={props.values.barn}
>
<CheckBox onChange={handleChange}
onBlur={handleBlur} id="1ID" group="Ja" name="barn" value={true}>
  Ja
</CheckBox>
<CheckBox onChange={handleChange}
onBlur={handleBlur} value={false} id="2ID" group="Nei">
  Nei
</CheckBox>

</CheckGroup> */
}
