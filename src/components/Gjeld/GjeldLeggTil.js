import React from "react";
import styled from "styled-components";
 
const GjeldLeggTil = ({eie}) => {
  //const [verdi, setVerdi] = useState();


  // console.log("Dette er", assets)
  // console.log("Dette er lengden", assets.length)

  return (
    <EiendelerListe>
      <ul>
        <Forklaring>
          <li>Gjeld</li>
          <li>Sum</li>
        </Forklaring>
      </ul>
      <ul>
        {eie.map(gjeld => (
          <Verdier>
            <>
              <li className="langiver">{gjeld.LanGiverInput}</li>
              <li className="sumgjeld">{gjeld.SumGjeld}</li>
            </>
          </Verdier>
        ))}
      </ul>
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
