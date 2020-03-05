import React from "react"
import { RadioPillItem, RadioPill } from "@staccx/bento";
import styled, { css } from "styled-components"
import { ErrorMessage, useFormikContext } from "formik"


export const antallBarn = [
	{
		myUniqueId: "221e98j",
		values: 1,
		label: "1",
		defaultChecked: true
	},
	{
		myUniqueId: "ads31",
		values: 2,
		label: "2",
		defaultChecked: false
	},
	{
		myUniqueId: "h14",
		values: 3,
		label: "3 ",
		defaultChecked: false
	},
	{
		myUniqueId: "h14asdsdf",
		values: 4,
		label: "4",
		defaultChecked: false
	},
	{
		myUniqueId: "h14dsfgdfgsd",
		values: 5,
		label: "5 +",
		defaultChecked: false
	}
];

const AntallBarn = ({ name, ...props }) => {
	const { setFieldValue } = useFormikContext()
	return (
		<div>
			<RadioPill
				group={"numBarn"}
				name="numBarn"
				{...props}
				onChange={e => setFieldValue(name, e.target.value)}
			>
				{antallBarn.map(listItem => (
					<RadioPillItem
						key={listItem.myUniqueId}
						value={listItem.values}
						defaultChecked={listItem.defaultChecked}
						id={listItem.myUniqueId}
					>
						{listItem.label}
					</RadioPillItem>
				))}
			</RadioPill>
			<ErrorMessage name={name}>
				{msg => console.log(msg) || <Error>{msg}</Error>}
			</ErrorMessage>
		</div>
	)
}
const Error = styled.div`
  color: red;
`
export default AntallBarn
