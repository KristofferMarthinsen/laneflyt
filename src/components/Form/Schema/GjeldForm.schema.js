import * as yup from "yup"
import LanGiverInputSchema from "../FormInputs/Langiver/LanGiverInput.schema"
import LanTypeInputSchema from "../FormInputs/Langiver/LanTypeInput.schema"
import LanGiverSumGjeldSchema from "../FormInputs/Langiver/LanGiverSumGjeld.schema"


export default yup.object().shape({
    LanGiverInput: LanGiverInputSchema,
    LanTypeInput: LanTypeInputSchema,
    LanGiverSumGjeld: LanGiverSumGjeldSchema
	
})