import React, { useState } from "react";
import {
  Button,
  CheckGroup,
  RadioButton,
} from "@staccx/bento";
import { Formik, Form } from "formik";
import FornavnInput from "./FormInputs/fornavn/FornavnInput";
import EtternavnInput from "./FormInputs/Etternavn/EtternavnInput";
import EpostInput from "./FormInputs/Epost/EpostInput";
import SignupSchema from "./FormInputs/HusstandForm.schema";
import SivilStatusInput from "./FormInputs/SivilStatus/SivilStatusInput";
import AntallBarnInput from "./FormInputs/AntallBarn/AntallBarnInput";
import BarnAlderInput from "./FormInputs/BarnAlder/BarnAlderInput";
import TelefonNummerInput from "./FormInputs/Telefon/TelefonNummerInput"



export const HusstandForm = () => {
  const [barn, setBarn] = useState(false);
  return (
	  <Formik
		  validationSchema={SignupSchema}
		  initialValues={{
			  Fornavn: "",
			  Etternavn: "",
			  Epost: "",
			  SivilStatus: null,
			  barn: barn,
			  BarnAlder: null,
			  antallBarn: null
		  }}
		  onSubmit={(values, { setSubmitting }) => {
			  setTimeout(() => {
				  console.log(values);
				  alert(JSON.stringify(values, null, 2));
				  setSubmitting(false);
			  }, 400);
		  }}
	  >
		  {({ handleSubmit, setFieldValue }) => {
		  	const handleBarn = value => {
		  		setFieldValue("barn", value);
		  		setBarn(value === "true" ? true : false);
		  };
			  return (
				  <Form>
					  <FornavnInput />
					  <EtternavnInput />
					<TelefonNummerInput/>
					  <EpostInput/>
					  <SivilStatusInput />
					  <p>Har du barn?</p>
					  <CheckGroup
						  label="Barn"
						  name="barn"
						  type="barn"
						  onChange={value => handleBarn(value)}
						  value={barn}
						  group="barn"
					  >
						  <RadioButton value={true} id="1" onChange={() => setBarn(true)}>
							  Ja
						  </RadioButton>
						  <RadioButton id="2" value={false}>
							  Nei
						  </RadioButton>
					  </CheckGroup>
					  {barn && (
					  	<>
						  <p>antall barn </p>
							<AntallBarnInput/>
						  </>
					  )}
				  <Button onClick={handleSubmit} > submit</Button>
				  </Form>
			  )}}
	  </Formik>
  );
};

export default HusstandForm;

