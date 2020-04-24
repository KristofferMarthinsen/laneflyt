import React, { useState } from "react";
import { eiendelCollection } from "./components/MongoDB";
import styled from "styled-components";


const GjeldLeggTil = () => {
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
          <li>Gjeld</li>
          
        </Forklaring>
      </ul>
      <Verdier>
        <ul>
          {eiendeler.map(gjeld => (
            <li>{gjeld.LanGiverInput}</li>
          ))}
        </ul>
      </Verdier>
    </EiendelerListe>
  );
};

export default GjeldLeggTil;

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
