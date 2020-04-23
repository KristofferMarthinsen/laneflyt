import React from "react";
import { laneflytCollection } from "./MongoDB";
import { object } from "yup";

const query = { Id: "1" }; //Find collection from log-in ID
const options = {} //Configuration options for
const assets = [];

laneflytCollection
.find(query)
.toArray()
.then(items => {
  items.map(db => 
    assets.push(db.Adresse));
    console.log(assets);
})
.catch(err => console.error(`Failed to find documents: ${err}`));

console.log("utenfor ", assets)

const SikkerhetLagtTil = () => {
 return (
    <div>
      <h1>{assets}</h1>
    </div>
  );
};

export default SikkerhetLagtTil;
//Siste prøve etter møtet: 
//Flytt dette over i sikkerhet, og se om det er lettere å få ut verdier da. Spesielt første initielle verdi.
