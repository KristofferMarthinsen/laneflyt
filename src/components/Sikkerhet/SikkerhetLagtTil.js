import React from "react";
import styled from "styled-components";


const SikkerhetLagtTil = ({eie}) => {
  
  return (
    <EiendelerListe>
      <ul>
        <Forklaring>
          <li>Adresse</li>
          <li>Verdi</li>
        </Forklaring>
      </ul>

      <ul>
        {eie.map(adresse => (
          <Verdier>
            <>
              <li className="adresse">{adresse.Adresse}</li>
              <li className="verdi">{adresse.EiendomsVerdi}</li>
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
  
  box-shadow: 0px 16px 16px rgba(0, 0, 75, 0.02),
  0px 8px 8px rgba(0, 0, 75, 0.02), 0px 4px 7px rgba(0, 0, 75, 0.021),
  0px 2px 2px rgba(0, 0, 75, 0.021), 0px 32px 22px rgba(0, 0, 75, 0.021),
  0px 44px 64px rgba(0, 0, 75, 0.02);
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
  background-color: #ffffff;
  justify-content: space-between;
  font-weight: 400;
  line-height: 40px;
  padding-left: 30px;
  padding-right: 50px;
  border-bottom: 1px solid #BBBBBB;
`;
