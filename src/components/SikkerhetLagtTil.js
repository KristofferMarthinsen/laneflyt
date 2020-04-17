import React from "react";
import { laneflytCollection } from "./MongoDB";
import { object } from "yup";

const query = { Id: "1" }; //Find collection from log-in ID
const assets = [];

const SikkerhetLagtTil = () => {
    
    laneflytCollection
    .find(query)
    .toArray()
    .then(items => {
      items.map(object => assets.push(object.Adresse));
    })
    .catch(err => console.error(`Failed to find documents: ${err}`));

    console.log(assets)
    
return <div><p>{assets}</p></div>
};

export default SikkerhetLagtTil;
