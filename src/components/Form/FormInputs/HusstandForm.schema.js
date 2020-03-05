import * as yup from "yup"
import FornavnSchema from "./FornavnInputs.schema"

export default yup.object().shape({
    Fornavn: FornavnSchema,
})