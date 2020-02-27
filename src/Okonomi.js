import React, { useState } from "react";
import {
  Button,
  CurrencyInput,
  Slider,
  RadioPill,
  RadioPillItem
} from "@staccx/bento";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import { OkonomiSVG } from "./svg/OkonomiSVG";
import Layout from "./components/Layout";
import styled from "styled-components";

export const bil = [
  {
    myUniqueId: "1bil",
    value: 1,
    label: "1",
    defaultChecked: true
  },
  {
    myUniqueId: "2bil",
    value: 2,
    label: "2",
    defaultChecked: false
  },
  {
    myUniqueId: "3bil",
    value: 3,
    label: "3 ",
    defaultChecked: false
  },
  {
    myUniqueId: "4bil",
    value: 4,
    label: "4",
    defaultChecked: false
  },
  {
    myUniqueId: "5bil",
    value: 5,
    label: "5 +",
    defaultChecked: false
  }
];
export const boliger = [
  {
    myUniqueId: "1boliger",
    value: 1,
    label: "1",
    defaultChecked: true
  },
  {
    myUniqueId: "2boliger",
    value: 2,
    label: "2",
    defaultChecked: false
  },
  {
    myUniqueId: "3boliger",
    value: 3,
    label: "3 ",
    defaultChecked: false
  },
  {
    myUniqueId: "4boliger",
    value: 4,
    label: "4",
    defaultChecked: false
  },
  {
    myUniqueId: "5boliger",
    value: 5,
    label: "5 +",
    defaultChecked: false
  }
];

const Subtitle = () => (
  <>
    <p>Legg inn samlet økonomi</p>
  </>
);

const Okonomi = () => {
  const [SamletOkonomi, setSamletOkonomi] = useState(0);
  return (
    <div>
      <Layout icon={OkonomiSVG} id={7} title="Økonomi" subtitle={Subtitle} />
      <FormLayout>
      <CurrencyInput
        label={"Sum inntekt"}
        value={SamletOkonomi || 0}
        onChange={e => setSamletOkonomi(e.target.value)}
      />
      <Slider
        name={"Disabled"}
        onChange={e => setSamletOkonomi(e.target.value)}
        min={0}
        max={10000}
        step={1000}
      />
      <p>Antall biler i husholdningen</p>
      <RadioPill group={"Radiopills"}>
        {bil.map(listItem => (
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
      <p>Antall fritids- og utleieboliger</p>
      <RadioPill group={"Radiopill"}>
        {boliger.map(listItem => (
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
      </FormLayout>
      <Link to="/Gjeld">
        <Button>Videre</Button>
      </Link>
      
    </div>
  );
};

export default Okonomi;

const FormLayout = styled.div`
  padding-top: 25px;
`