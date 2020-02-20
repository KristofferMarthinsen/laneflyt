import React, { Component } from "react";
import styled from "styled-components";

export class Heading extends Component {
  render() {
    return (
      <div>
        <Headline>
            <Title> Lånedetaljer</Title>
                <Progress>
                        <div className="en"></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </Progress>
        </Headline>
      </div>
    );
  }
}

export default Heading;

const Headline = styled.div`
    background-color: lightyellow;
    font-family: Raleway;
    font-weight: 300;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    color: #146670;
    font-size: 32px;
    font-weight: 600;
`

const Progress = styled.span`
    display: flex;
    justify-content: space-around;
    width: 140px;
    div{
        width: 13px;
        height: 13px;
        background-color: #E0E0E0;
        border-radius: 50%;
        z-index: 1;
    }
    div:hover{
        background-color: #5C306B;
    }
    div.en{
        background-color: #5C306B;
        width: 40px; 
        border-radius: 20px;
        position: static;
        z-index: 2;
        align-self: flex-start;
    }
`
