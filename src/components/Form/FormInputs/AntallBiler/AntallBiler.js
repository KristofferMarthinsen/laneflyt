import React, { useState } from "react";
import { RadioPillItem, RadioPill, Label } from "@staccx/bento";
import styled from "styled-components";
import { ErrorMessage, useFormikContext } from "formik";

export const bil = [
  {
    myUniqueId: "1bil",
    values: 1,
    label: "1",
    defaultChecked: true
  },
  {
    myUniqueId: "2bil",
    values: 2,
    label: "2",
    defaultChecked: false
  },
  {
    myUniqueId: "3bil",
    values: 3,
    label: "3 ",
    defaultChecked: false
  },
  {
    myUniqueId: "4bil",
    values: 4,
    label: "4",
    defaultChecked: false
  },
  {
    myUniqueId: "5bil",
    values: 5,
    label: "5 +",
    defaultChecked: false
  }
];
const AntallBiler = ({ name, ...props }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <RadioPill
        group={"antallBiler"}
        name="antallBiler"
        {...props}
        onChange={e => setFieldValue(name, e.target.value)}
      >
        {bil.map(listItem => (
          <RadioPillItem
            key={listItem.myUniqueId}
            value={listItem.values}
            defaultChecked={listItem.defaultChecked}
            id={listItem.myUniqueId}
          >
            {listItem.label}
          </RadioPillItem>
        ))}
      </RadioPill>
      <ErrorMessage name={name}>
        {msg => console.log(msg) || <Error>{msg}</Error>}
      </ErrorMessage>
    </div>
  );
};

const Error = styled.div`
  color: red;
`;
export default AntallBiler;
