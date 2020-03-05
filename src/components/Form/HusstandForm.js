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
			  antallBarn: null,
			  BarnAlder: null
		  }}
		  onSubmit={(values, { setSubmitting }) => {
			  setTimeout(() => {
				  console.log(values);
				  alert(JSON.stringify(values, null, 2));
				  console.log(values);
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
					  <EpostInput/>
					  <SivilStatusInput />
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
							<BarnAlderInput/>
						  </>
					  )}
				  <Button onClick={handleSubmit} > submit</Button>
				  </Form>
			  )}}
	  </Formik>
  );
};

export default HusstandForm;

