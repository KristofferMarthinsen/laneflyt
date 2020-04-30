import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { GjeldSVG } from "./svg/Gjeld1";
import {Gjeld2SVG} from "./svg/Gjeld2"
import Layout from "./components/Layout";
import styled from "styled-components";
import GjeldLeggTil from "./GjeldLeggTil"
import { Button } from "@staccx/bento";
import GjeldFormSchema from "./components/Form/FormInputs/GjeldForm.schema";
import LanGiverInput from "./components/Form/FormInputs/Langiver/LanGiverInput";
import LanTypeInput from "./components/Form/FormInputs/Langiver/LanType";
import SumGjeld from "./components/Form/FormInputs/Langiver/LanGiverSumGjeld";
import { eiendelCollection } from "./components/MongoDB";
import { Formik, Form } from "formik";


const Subtitle = () => (
  <>
    <h3>Legg inn din gjeld</h3>
    <p>
      Dette inkluderer alle lån du har i dag, inkludert kredittkort og lignende.
    </p>
  </>
);




const Gjeld = () => {
	const [eiendeler, setEiendeler] = useState([]);
  const [PopupState, setPopupState] = useState(false); //Set state for toggle view of popup

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
      <Layout icon={GjeldSVG} id={7} title="Gjeld" subtitle={Subtitle}>
		  <GjeldLeggTil eie={eiendeler}/>
      <Button onClick={handleShow} variant="unstyledButton">
          Legg til +
        </Button>
        <Popup>
        {PopupState && ( //If state is true, display popup-form
                <Formik
      validationSchema={GjeldFormSchema}
      initialValues={{
        LanGiverInput: "",
        LanTypeInput: "",
        SumGjeld: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const leggTil = {
              Id : "1",
              LanGiverInput: values.LanGiverInput,
              LanTypeInput: values.LanTypeInput,
              SumGjeld: values.SumGjeld

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
                    <p>Legg til Gjeld</p>
                    <Gjeld2SVG/>
                    <Form>
                      <LanGiverInput />
                      <LanTypeInput />
                      <SumGjeld />
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
        <Link to="/Estimat2">
          <Button>Videre</Button>
        </Link>
      </Videre>
    </div>
  );
};

 export default Gjeld;

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
