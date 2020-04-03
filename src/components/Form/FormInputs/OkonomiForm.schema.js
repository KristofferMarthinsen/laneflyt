import * as yup from "yup"
import SamletInntektSchema from "./SamletInntekt/SamletInntekt.Schema"

export default yup.object().shape({
    SamletInntekt: SamletInntektSchema,

})