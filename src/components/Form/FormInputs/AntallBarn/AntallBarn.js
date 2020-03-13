import React, { useState } from "react";
import { RadioPillItem, RadioPill } from "@staccx/bento";
import styled from "styled-components";
import { ErrorMessage, useFormikContext } from "formik";

import BarnAlder from "../BarnAlder/BarnAlder";

export const antallBarn = [
  {
    myUniqueId: "221e98j",
    values: 1,
    label: "1",
    defaultChecked: true
  },
  {
    myUniqueId: "ads31",
    values: 2,
    label: "2",
    defaultChecked: false
  },
  {
    myUniqueId: "h14",
    values: 3,
    label: "3 ",
    defaultChecked: false
  },
  {
    myUniqueId: "h14asdsdf",
    values: 4,
    label: "4",
    defaultChecked: false
  },
  {
    myUniqueId: "h14dsfgdfgsd",
    values: 5,
    label: "5 +",
    defaultChecked: false
  }
];

const AntallBarn = ({ name, ...props }) => {
  const [antall, setAntall] = useState(0);
  const { setFieldValue } = useFormikContext();

  return (
    <div>
      <RadioPill
        group={"numBarn"}
        name="numBarn"
        {...props}
        onChange={e => (
          setAntall(e.target.value), setFieldValue(name, e.target.value)
        )}
      >
        {antallBarn.map(listItem => (
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
      <div>
        {antall === "1" && (
          <BarnAlder name={"BarnAlder"} label={"Alder barn 1"} />
        )}
        {antall === "2" && (
          <>
            <BarnAlder name={"BarnAlder"} label={"Alder barn 1"} />
            <BarnAlder name={"BarnAlder2"} label={"Alder barn 2"} />
          </>
        )}
        {antall === "3" && (
          <>
            <BarnAlder name={"BarnAlder"} label={"Alder barn 1"} />
            <BarnAlder name={"BarnAlder2"} label={"Alder barn 2"} />
            <BarnAlder name={"BarnAlder3"} label={"Alder barn 3"} />
          </>
        )}
        {antall === "4" && (
          <>
            <BarnAlder name={"BarnAlder"} label={"Alder barn 1"} />
            <BarnAlder name={"BarnAlder2"} label={"Alder barn 2"} />
            <BarnAlder name={"BarnAlder3"} label={"Alder barn 3"} />
            <BarnAlder name={"BarnAlder4"} label={"Alder barn 4"} />
          </>
        )}
        {antall === "5" && (
          <>
            <BarnAlder name={"BarnAlder"} label={"Alder barn 1"} />
            <BarnAlder name={"BarnAlder2"} label={"Alder barn 2"} />
            <BarnAlder name={"BarnAlder3"} label={"Alder barn 3"} />
            <BarnAlder name={"BarnAlder4"} label={"Alder barn 4"} />
            <BarnAlder name={"BarnAlder5"} label={"Alder barn 5"} />
          </>
        )}
      </div>
    </div>
  );
};
const Error = styled.div`
  color: red;
`;
export default AntallBarn;
