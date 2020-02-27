import React, { Component } from "react";
import VidereKnapp from "./components/VidereKnapp";
import Header from "./components/Header";
import { Button, Heading } from "@staccx/bento";
import { Link } from "react-router-dom";
import {Gris} from "./svg/Gris"
import theme from "./theme/theme";
import styled from "styled-components"

export class Lanetakere extends Component {
  render() {
    return (
      <div>
        <Wrapper>
        <Header title="Lånetakere" id={2} />
        
        <Icon>{Gris}</Icon>
        
        <Tekst>
            <h3> Skal du låne sammen med noen?</h3>
            <p>En medlåntaker låner sammen med deg for eksempel en samboer kan låne sammen med deg og er f.eksempel 50% ansvarlig for lånet</p>
        </Tekst>

        <Svar>
        <Button variant="">Ja</Button>
        <Button variant="">Nei</Button>
        </Svar>

        <Videre>
        <Link to="/Husstanden">
          <Button>Videre</Button>
          <Link to ="/Nedbetalingsplan"><Button variant="unstyledButton">Nedbetalingsplan</Button></Link>
        </Link>
        </Videre>
      </Wrapper>
      </div>
    );
  }
}

export default Lanetakere;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 800px;
    padding-top: 150px;
`

const Icon = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 69px;
`

const Tekst = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 14px;
        h3{
          font-size: 16px;
          font-weight: 300;
        }
        p{
          padding-top: 2px;
          font-size: 11px;
          color: #626271;
        }
`

const Svar = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 28px;
    width: 177px;
    justify-content: space-between;
          button{
            width: 83px;
          }
`
const Videre = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 174px;
    min-width: 300px;
    justify-content: space-around;
`