import * as yup from "yup"
import NedbetalingsTid from "../FormInputs/NedbetalingsTidInput/NedbetalingsTid.schema"
import BoligVerdi from "../FormInputs/BoligVerdi/BoligVerdiInput.schema"
import LaneSumInput from "../FormInputs/LaneSum/LaneSumInput.schema"
import AvdragsFrihet from "../FormInputs/AvdragsFrihet/AvdragsFrihet.schema"


export default yup.object().shape({

    AvdragsFrihet: AvdragsFrihet,
    NedbetalingsTid: NedbetalingsTid,
    BoligVerdi: BoligVerdi,
    LaneSum: LaneSumInput,



})
