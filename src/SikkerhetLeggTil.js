import React, { useState } from "react";
import { Heading, Button, Input, CurrencyInput, Slider } from "@staccx/bento";
import { Link } from "react-router-dom";
import {SikkerhetLeggTilSVG} from "./svg/SikkerhetLeggTilSVG"
import Layout from "./components/Layout"

const Subtitle = () => (
  <>
  <p>Her kan du legge til sikkerheit</p>
  </>
  );



export const SikkerhetLegTil = () => {
  const [BoligVerdi, setBoligVerdi] = useState(0);
  const [KjopeSum, setKjopeSum] = useState(0);
  return (
    <div>
    <Layout icon={SikkerhetLeggTilSVG} id={6} title="Legg til Sikkerheit" subtitle={Subtitle}></Layout>
      <Input label={"Adresse"} />
      <CurrencyInput
        label={"Bolig verdi"}
        value={BoligVerdi || 0}
        onChange={e => setBoligVerdi(e.target.value)}
      />
       <CurrencyInput
        label={"Kjøpesum"}
        value={KjopeSum || 0}
        onChange={e => setKjopeSum(e.target.value)}
      />
      <Slider
        name={"Disabled"}
        onChange={e => setBoligVerdi(e.target.value)}
        min={0}
        max={10000}
        step={1000}
      />
      <Link to="Sikkerhet">
        <Button>Lagre</Button>
      </Link>
    </div>
  );
};
export default SikkerhetLegTil;
