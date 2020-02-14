import React, { Component } from 'react'
import VidereKnapp from "./components/VidereKnapp"

export class Estimat extends Component {
    render() {
        return (
            <div>
                <h1>Estimat</h1>
                <p>kult bilde</p>
                <p>Basert på informasjonen vi har så langt, tror vi du kan betjene dette lånet</p>
                
                <VidereKnapp onClick={this.props.onNext} />
            </div>
        )
    }
}

export default Estimat
