import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button,Heading } from "@staccx/bento";
import Header from "./components/Header";
import {EstimatSVG} from "./svg/EstimatSVG"
import styled from "styled-components";
export class Estimat extends Component {
    render() {
        return (
            <div>
            <Wrapper>
                <HeaderElement>
                     <Header title="Estimat" id={5}/>
                </HeaderElement>
              
                <Icon>{EstimatSVG}</Icon>
                
                <Tekst>
                    <h3>Basert på informasjonen vi har så langt, tror vi du kan betjene dette lånet</h3>
                </Tekst>

                <Estimate>
                    <h1>5 123 333</h1>
                    <Button variant="unstyledButton">Lånedetaljer ></Button>
                </Estimate>
                
                <Videre>
                    <Link to = "/Sikkerhet"><Button>Videre</Button></Link>
                </Videre>
            </Wrapper>
            </div>
        )
    }
}

export default Estimat;

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
    padding-top: 14px;
    width: 290px;
        h3{
          font-size: 16px;
          font-weight: normal;
        }
`

const Estimate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    text-align: center;
    padding-top: 23px;
        h1{
            font-size: 32px;
            font-weight: 600;
        }
`
const Videre = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 134px;
    min-width: 300px;
    justify-content: space-around;
          button{
            width: 280px;
          }
`