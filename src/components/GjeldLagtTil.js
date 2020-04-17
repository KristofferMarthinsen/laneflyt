import React, {useState} from "react";
import { laneflytCollection } from "./MongoDB"

const query = { "Id": "1" };
const testy = [];

laneflytCollection.find(query)
.toArray()
.then(items => { items.map(object => testy.push(object.LanGiverInput)+(console.log(object)))})
.catch(err => console.error(`Failed to find documents: ${err}`))




const GjeldLagtTil = () => {
return(
    <div>
   <p>hei</p>
   <p>{testy}</p>
   </div>
    
)
}
export default GjeldLagtTil

