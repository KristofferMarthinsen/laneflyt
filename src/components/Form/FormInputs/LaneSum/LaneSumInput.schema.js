import * as yup from "yup"



export default yup
.number()
.positive()
.integer()
.min(100, "Invalid.")
.required()