import React from "react";
import { RadioPillItem, RadioPill } from "@staccx/bento";
import styled from "styled-components";

export const antallLanetakere = [
  {
    myUniqueId: "hoved",
    values: 1,
    label: "Hovedlåntaker",
    defaultChecked: true,
  },
  {
    myUniqueId: "med",
    values: 2,
    label: "Medlåntaker",
    defaultChecked: false, 
  },
];

const AntallLanetakere = () => {
  return (
    <Group>
      <RadioPill group={"Lanetakere"}>
        {antallLanetakere.map((listItem) => (
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
    </Group>
  );
};

export default AntallLanetakere;

const Error = styled.div`
  color: red;
`;

const Group = styled.div`
    label {
    border: 2px solid #146670;
    box-sizing: border-box;
    border-radius: 0px 4px 4px 0px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  
`;
