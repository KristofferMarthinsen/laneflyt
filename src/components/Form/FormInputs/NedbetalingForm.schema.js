import * as yup from "yup"
import NedbetalingsTid from "./NedbetalingsTidInput/NedbetalingsTid.schema"
import BoligVerdi from "./BoligVerdi/BoligVerdiInput.schema"
import LaneSumInput from "./LaneSum/LaneSumInput.schema"
import AvdragsFrihet from "./AvdragsFrihet/AvdragsFrihet.schema"


export default yup.object().shape({

    AvdragsFrihet: AvdragsFrihet,
    NedbetalingsTid: NedbetalingsTid,
    BoligVerdi: BoligVerdi,
    LaneSum: LaneSumInput,



})
