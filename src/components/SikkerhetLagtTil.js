import React from "react";
import { laneflytCollection } from "./MongoDB";
import { object } from "yup";

const assets = [];

const SikkerhetLagtTil = () => {
  laneflytCollection
    .find({})
    .toArray()
    .then(items => {
      items.map(db => {
          assets.push(db.Adresse)
          console.log(assets)
      });
    })
    .catch(err => console.error(`Failed to find documents: ${err}`));
    
    
  return (
    <div>
      <ul><li>{assets}</li></ul>
    </div>
  );
};

export default SikkerhetLagtTil;

//Flytt dette over i sikkerhet, og se om det er lettere å få ut verdier da. Spesielt første initielle verdi.
