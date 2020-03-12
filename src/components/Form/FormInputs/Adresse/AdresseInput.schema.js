import * as yup from "yup"

export default yup
	.string("Må være en string")
	.min(2, "Too Short!")
	.max(50, "Too Long!")
	.required("Required")
