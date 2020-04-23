import * as yup from "yup";

export default yup
  .number("Has to be a number")
  .positive()
  .integer()
  .min(100, "Invalid.")
  .required();
