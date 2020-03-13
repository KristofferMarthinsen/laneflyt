import React from "react";
import { Button } from "@staccx/bento";
import { Link } from "react-router-dom";
import { OkonomiSVG } from "./svg/OkonomiSVG";
import Layout from "./components/Layout";
import styled from "styled-components";
import { OkonomiForm } from "./components/Form/Okonomi/OkonomiForm";

const Subtitle = () => (
  <>
    <p>Legg inn samlet økonomi</p>
  </>
);

const Okonomi = () => {
  return (
    <div>
      <Layout icon={OkonomiSVG} id={7} title="Økonomi" subtitle={Subtitle} />
      <FormLayout>
        <OkonomiForm />
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
`;

{
  /* 
  const [SamletOkonomi, setSamletOkonomi] = useState(0);
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
      </RadioPill> */
}
