import React, { Component } from "react";
import { Button, Heading } from "@staccx/bento";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import { DokApp } from "./svg/DokApp";

export class Legitimering extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <HeaderElement>
          <Header title="Legitimering" id={4} />
          </HeaderElement>

          <Icon>{DokApp}</Icon>

          <Tekst>
          <h3>For å hente opplysninger fra deg automatisk trenger vi ditt samtykke</h3>
          <p>Du vil bli videresendt til Altinn sine nettsider for å hente informasjon om din lønn, gjeld og formue</p>
          </Tekst>
          
          <Neste>
          <Link to="/Alltin">
            <Button>Ta meg til Altinn</Button>
          </Link>

          <Link to="/Estimat">
            <Button variant="unstyledButton"> Gå videre uten samtykke</Button>
          </Link>
          </Neste>
        </Wrapper>
      </div>
    );
  }
}

export default Legitimering;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 800px;
    padding-top: 150px;
`

const HeaderElement = styled.div`
    align-self: flex-start;
    padding-left: 7px;
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
    width: 297px;
    padding-top: 36px;
        h3{
          font-size: 16px;
          font-weight: normal;
        }
        p{
          padding-top: 9px;
          font-size: 11px;
          font-weight: normal;
          color: #626271;
        }
`

const Neste = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 27px;
    min-width: 300px;
    justify-content: space-around;

        button{
          width: 297px;
        }
`