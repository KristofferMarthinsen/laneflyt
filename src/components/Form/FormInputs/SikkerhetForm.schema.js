import * as yup from "yup"
import AdresseInput from "./Adresse/AdresseInput.schema"
import BoligVerdiInput from "./BoligVerdi/BoligVerdiInput.schema"
import KjopeVerdiInput from "./KjopeVerdi/KjopeVerdiInput.schema"

export default yup.object().shape({
    Adresse: AdresseInput,
	BoligVerdi: BoligVerdiInput,
	KjopeVerdi: KjopeVerdiInput
})
