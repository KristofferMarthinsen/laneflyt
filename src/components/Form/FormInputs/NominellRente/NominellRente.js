import React from "react";
import { SelectSimple } from "@staccx/bento";
import { ErrorMessage, useFormikContext } from "formik";
import styled from "styled-components";

const NominellRente = ({ name, ...props }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <div>
	  <SelectSimple
        label="Nominell rente"
        name="NominellRente"
        id="NominellRente"
        placeholder="Velg..."
        component="select"
        {...props}
        onChange={e => setFieldValue(name, e.target.value)}
      >
        <option value="1">2%</option>
        <option value="2">2%</option>
        <option value="3">2%</option>
        <option value="4">2%</option>
        <option value="5">2%</option>
        <option value="6">2%</option>
        <option value="7">2%</option>
        <option value="8">2%</option>
        <option value="9">2%</option>
        <option value="10">2%</option>
      </SelectSimple>
	  
      <ErrorMessage name={name}>
        {msg => console.log(msg) || <Error>{msg}</Error>}
      </ErrorMessage>
    </div>
  );
};

export default NominellRente;

const Error = styled.div`
  color: red;
`;
