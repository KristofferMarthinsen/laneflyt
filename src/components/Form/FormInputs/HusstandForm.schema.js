import * as yup from "yup"
import FornavnSchema from "./fornavn/FornavnInputs.schema"
import EtternavnInput from "./Etternavn/EtternavnInput.schema"
import TelefonnummerInput from "./Telefon/TelefonnummerInput.schema"

export default yup.object().shape({
    Fornavn: FornavnSchema,
	Etternavn: EtternavnInput,
	TelefonNummer: TelefonnummerInput
})
