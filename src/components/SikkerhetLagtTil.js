import React, { useState } from "react";
import { eiendelCollection } from "./MongoDB";
import { object } from "yup";
import styled from "styled-components";

//Bruker ikke state, men let, fordi vi skal ha flere komponenter i en liste
//Problemet nå er å displaye arrayet ut i komponenten

const SikkerhetLagtTil = () => {
  //let assets = [];
  const [eiendeler, setEiendeler] = useState([]);
  //const [verdi, setVerdi] = useState();
  eiendelCollection
    .find()
    .toArray()
    .then(items => {
      if (eiendeler.length == 0) {
        setEiendeler(items);
      }
      //setAdress([...adress, db.Adresse])
      //setVerdi(db.EiendomsVerdi);
    })
    .catch(err => console.error(`Failed to find documents: ${err}`));

  // console.log("Dette er", assets)
  // console.log("Dette er lengden", assets.length)

  return (
    <EiendelerListe>
      <ul>
        <Forklaring>
          <li>Adresse</li>
          <li>Verdi</li>
        </Forklaring>
      </ul>

      <ul>
        {eiendeler.map(adresse => (
          <Verdier>
            <>
              <li>{adresse.Adresse}</li>
              <li>{adresse.EiendomsVerdi}</li>
            </>
          </Verdier>
        ))}
      </ul>
    </EiendelerListe>
  );
};

export default SikkerhetLagtTil;

const EiendelerListe = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  margin: 0px;
  min-width: 115%;
`;

const Forklaring = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: 700;
  padding-bottom: 4px;
`;

const Verdier = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: 400;
  line-height: 40px;
  background-color: #ffffff;
  box-shadow: 0px 16px 16px rgba(0, 0, 75, 0.02),
    0px 8px 8px rgba(0, 0, 75, 0.02), 0px 4px 7px rgba(0, 0, 75, 0.021),
    0px 2px 2px rgba(0, 0, 75, 0.021), 0px 32px 22px rgba(0, 0, 75, 0.021),
    0px 44px 64px rgba(0, 0, 75, 0.02);
`;
