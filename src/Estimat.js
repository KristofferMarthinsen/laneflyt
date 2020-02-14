import React, { Component } from 'react'
import VidereKnapp from "./components/VidereKnapp"
import {Button} from  "@staccx/bento"

export class Estimat extends Component {
    render() {
        return (
            <div>
                <h1>Estimat</h1>
                <p>kult bilde</p>
                <p>Basert på informasjonen vi har så langt, tror vi du kan betjene dette lånet</p>
                <p>500 000 000 000 </p>
                <Button>lånedetaljer</Button>
                <VidereKnapp onClick={this.props.onNext} />
            </div>
        )
    }
}

export default Estimat
