import React from "react";
import { laneflytCollection } from "./MongoDB"

const query = { "Id": "1" };

laneflytCollection.find(query)
.toArray()
.then(items => { items.map(object => (console.log("Gjeld lagt til kjører uansett hvor man er")))})
.catch(err => console.error(`Failed to find documents: ${err}`))

const GjeldLagtTil = props => {
return(
   <p>hei</p>
    
)




}
export default GjeldLagtTil

