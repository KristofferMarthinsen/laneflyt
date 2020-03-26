import * as yup from "yup"

export default yup
  .string("Må være streng")
  .min(2, "Too Short")
  .max(100,"teit")
  .strict()
  .required("Dette feltet er påkrevd")