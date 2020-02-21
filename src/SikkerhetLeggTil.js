import React, { useState } from "react";
import { Heading, Button, Input, CurrencyInput, Slider } from "@staccx/bento";
import { Link } from "react-router-dom";
const SikkerhetLegTil = () => {
  const [BoligVerdi, setBoligVerdi] = useState(0);
  const [KjopeSum, setKjopeSum] = useState(0);
  return (
    <div>
      <Heading>Legg til Sikkerheit</Heading>
      <p>test</p>
      <Input label={"Adresse"} />
      <Link to="Sikkerhet">
        <Button>Lagre</Button>
      </Link>
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
    </div>
  );
};
export default SikkerhetLegTil;
