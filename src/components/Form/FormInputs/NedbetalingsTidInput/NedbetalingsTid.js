import React from "react";
import { SelectSimple } from "@staccx/bento";
import { ErrorMessage, useFormikContext } from "formik";
import styled from "styled-components";

const NedbetalingsTid = ({ name, ...props }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <div>
	  <SelectSimple
        label="Nedbetalingstid"
        name="Nedbetalingstid"
        id="Nedbetaling"
        placeholder="Velg..."
        component="select"
        {...props}
        onChange={e => setFieldValue(name, e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">17</option>
        <option value="19">17</option>
        <option value="20">17</option>
        <option value="21">17</option>
        <option value="22">17</option>
        <option value="23">17</option>
        <option value="24">17</option>
        <option value="25">17</option>
      </SelectSimple>
	  
      <ErrorMessage name={name}>
        {msg => console.log(msg) || <Error>{msg}</Error>}
      </ErrorMessage>
    </div>
  );
};

export default NedbetalingsTid;

const Error = styled.div`
  color: red;
`;
