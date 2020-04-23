import React, {useState} from "react";
import { laneflytCollection } from "./MongoDB"

const query = { "Id": "1" };
const options = {
    "LanGiverInput": {},
    
}
const testy = [];

laneflytCollection.find(query, options)
.toArray()
<<<<<<< HEAD
.then(items => { items.map(object => (console.log("Gjeld lagt til kjører uansett hvor man er")))})
=======
.then(items => { items.map(object => testy.push(object.LanGiverInput) +(console.log(object)))})
>>>>>>> 350e8a7d948e438dd1a12f1dcc0f4a0f6de4867a
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

