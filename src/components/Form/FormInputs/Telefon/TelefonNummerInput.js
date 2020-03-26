import React from "react"
import {PhoneInput} from "@staccx/bento"
import { ErrorMessage, useFormikContext } from "formik"



const TelefonnummerInput = () => {
	const { setFieldValue } = useFormikContext()
	return (
		<div>
			<PhoneInput id="phoneID" name="tlf" label="Telefonnummer" onChange={e => setFieldValue("Telefon", e.target.value)}/>
		</div>
	)
}
export default TelefonnummerInput
