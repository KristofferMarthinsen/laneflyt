import React from "react"
import { SelectSimple } from "@staccx/bento";
import styled from "styled-components"
import { ErrorMessage, useFormikContext } from "formik"

const Sivilstatus = ({ name, ...props }) => {
	const { setFieldValue } = useFormikContext()
	return (
		<div>
			<SelectSimple
				label={"SivilStatus"}
				name={"SivilStatus"}
				id="Sivilstatus"
				placeholder="Velg..."
				{...props}
				onChange={e => setFieldValue(name, e.target.value)}
			>
				<option value={"Gift"}>Gift</option>
				<option value={"Samboer"}>Samboer</option>
			</SelectSimple>
			<ErrorMessage name={name}>
				{msg => console.log(msg) || <Error>{msg}</Error>}
			</ErrorMessage>
		</div>
	)
}
const Error = styled.div`
  color: red;
`
export default Sivilstatus
