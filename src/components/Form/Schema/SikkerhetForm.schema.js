import * as yup from "yup"
import AdresseInput from "../FormInputs/Adresse/AdresseInput.schema"
import BoligVerdiInput from "../FormInputs/BoligVerdi/BoligVerdiInput.schema"
import KjopeVerdiInput from "../FormInputs/KjopeVerdi/KjopeVerdiInput.schema"

export default yup.object().shape({
    Adresse: AdresseInput,
	BoligVerdi: BoligVerdiInput,
	KjopeVerdi: KjopeVerdiInput
})
