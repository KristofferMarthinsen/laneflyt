import * as yup from "yup"
import FornavnSchema from "../FormInputs/fornavn/FornavnInputs.schema"
import EtternavnInput from "../FormInputs/Etternavn/EtternavnInput.schema"
import TelefonnummerInput from "../FormInputs/Telefon/TelefonnummerInput.schema"

export default yup.object().shape({
    Fornavn: FornavnSchema,
	Etternavn: EtternavnInput,
	TelefonNummer: TelefonnummerInput
})
