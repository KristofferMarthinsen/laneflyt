import React from "react";
import { SelectSimple } from "@staccx/bento";
import { ErrorMessage, useFormikContext } from "formik";
import styled from "styled-components";

const LanTypeInput = ({name, props}) => {

    const { setFieldValue } = useFormikContext();

    return (
      <div>
        <SelectSimple
          label="Type lån"
          name="LanTypeInput"
          id="LanTypeInput"
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
       
        </SelectSimple>
        
        <ErrorMessage name={name}>
          {msg => console.log(msg) || <Error>{msg}</Error>}
        </ErrorMessage>
      </div>
    );
  };
  
  export default LanTypeInput;
  
  const Error = styled.div`
    color: red;
  `;
  