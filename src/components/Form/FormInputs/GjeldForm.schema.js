import * as yup from "yup"
import LanGiverInputSchema from "./Langiver/LanGiverInput.schema"
import LanTypeInputSchema from "./Langiver/LanTypeInput.schema"
import LanGiverSumGjeldSchema from "./Langiver/LanGiverSumGjeld.schema"


export default yup.object().shape({
    LanGiverInput: LanGiverInputSchema,
    LanTypeInput: LanTypeInputSchema,
    LanGiverSumGjeld: LanGiverSumGjeldSchema
	
})