import React from "react"
import { Input} from "@staccx/bento"
import styled from "styled-components"
import { ErrorMessage, useFormikContext } from "formik"

const HusstandInput = ({ name, ...props }) => {
	const { setFieldValue } = useFormikContext()
	return (
		<div>
			<StyledInput
				location={"suggestWords"}
				onChange={e => setFieldValue(name, e.target.value)}
				{...props}
			/>
			<ErrorMessage name={name}>
				{msg => console.log(msg) || <Error>{msg}</Error>}
			</ErrorMessage>
		</div>
	)
}
const Error = styled.div`
  color: red;
`
const StyledInput = styled(Input)`
	display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;

`
export default HusstandInput
