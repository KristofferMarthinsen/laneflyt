import * as yup from "yup"
import SamletInntektSchema from "../FormInputs/SamletInntekt/SamletInntekt.Schema"

export default yup.object().shape({
    SamletInntekt: SamletInntektSchema,

})