import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "@staccx/bento";
import { Link } from "react-router-dom";
import { SikkerhetSVG } from "./svg/SikkerhetSVG";
import Layout from "./components/Layout";
import { SikkerhetLeggTilSVG } from "./svg/SikkerhetLeggTilSVG";
import { Formik, Form } from "formik";
import SignupSchema from "./components/Form/Schema/SikkerhetForm.schema";
import AdresseInput from "./components/Form/FormInputs/Adresse/AdresseInput";
import KjopeVerdiInput from "./components/Form/FormInputs/KjopeVerdi/KjopeVerdiInput";
import BoligVerdiInput from "./components/Form/FormInputs/BoligVerdi/BoligVerdiInput";
import { eiendelCollection } from "./components/MongoDB";
import SikkerhetLagtTil from "./components/SikkerhetLagtTil";



const Subtitle = () => (
  <>
    <h3>Har du en eiendom som kan brukes til sikkerhet for lånet?</h3>
    <p>
      Du kan også legge til flere boliger som skal brukes til sikkerhet for
      lånet
    </p>
  </>
);

const Sikkerhet = () => {
  const [PopupState, setPopupState] = useState(false); //Set state for toggle view of popup
  const [eiendeler, setEiendeler] = useState([])


  const handleShow = () => {
    setPopupState(true);
  };

  const handleHide = () => {
    setPopupState(false);
  };

  useEffect(() => {
    eiendelCollection
      .find()
      .toArray()
      .then(items => {
        if (eiendeler.length === 0) {
          setEiendeler(items);
        }
        //setAdress([...adress, db.Adresse])
        //setVerdi(db.EiendomsVerdi);
      })
      .catch(err => console.error(`Failed to find documents: ${err}`));
  
    },[])

  

  return (
    <div>
      <Layout title="Sikkerhet" id={6} icon={SikkerhetSVG} subtitle={Subtitle}>
        <SikkerhetLagtTil eie={eiendeler}/>
        <Button onClick={handleShow} variant="unstyledButton">
          Legg til +
        </Button>
        <Popup>
          {PopupState && ( //If state is true, display popup-form
            <Formik
              validationSchema={SignupSchema}
              initialValues={{
                Adresse: "",
                BoligVerdi: "",
                KjopeVerdi: ""
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  const leggTil = {
                      Id: "1",
                      Adresse: values.Adresse,
                      EiendomsVerdi: values.BoligVerdi,
                      KjopeVerdi: values.KjopeVerdi
                    
                  };

                  
                  eiendelCollection.insertOne(leggTil)
      .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`)).then(() => {
				setEiendeler(oldArray => [...oldArray, leggTil]);
	}
		).catch(err => console.error(`Failed to insert item: ${err}`))
			setSubmitting(false);
                  handleHide(); //Set state to false once form is filled out
                }, 400);
              }}
            >
              {({ handleSubmit }) => {
                return (
                  <PopupStyling>
                    <p>Legg til eiendel</p>
                    <SikkerhetLeggTilSVG />
                    <button onClick={handleHide}>X</button>
                    <Form>
                      
                      <AdresseInput />
                      <BoligVerdiInput />
                      <KjopeVerdiInput />
                    </Form>
                    <div className="navigationButtons">
                      <Button
                        className="nextBtn"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Lagre
                      </Button>
                    </div>
                  </PopupStyling>
                );
              }}
            </Formik>
          )}
        </Popup>
      </Layout>
      <Videre>
        <Link to="/Okonomi">
          <Button>Videre</Button>
        </Link>
      </Videre>
    </div>
  );
};

export default Sikkerhet;

const PopupStyling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  min-width: 375px;
  min-height: 500px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-left: 0px;
  padding-left: 0px;
  p {
    font-weight: bold;
    color: #a5a5a5;
  }
`;

const Popup = styled.div`
  position: absolute;
  margin-top: 110px;
  z-index: 1;
`;

const Videre = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 300px;
  justify-content: center;
  padding-top: 150px;
  button {
    width: 280px;
  }
`;
