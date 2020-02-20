import React, { Component } from "react";
import styled from "styled-components";

export class Heading extends React.Component { 
render() {
    return (
      <div>
        <Headline>
            <Title>{this.props.title}</Title>
                <Progress>
                        <div className="bar"></div>
                        <div></div>
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
    justify-content: space-between;
    width: 140px;
    position: relative;
    div{
        width: 13px;
        height: 13px;
        background-color: #E0E0E0;
        border-radius: 50%;
       
    }
    div:hover{
        background-color: #5C306B;
    }
    div.bar{
        background-color: #5C306B;
        width: 40px; 
        border-radius: 20px;
        position: absolute;
        
    }
`