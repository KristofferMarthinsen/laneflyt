import * as yup from "yup"
import NedbetalingstidInput from "./LaneSum/NedbetalingstidsInput.schema"

export default yup.object().shape({
    NedbetalingstidInput: NedbetalingstidInput,

})
