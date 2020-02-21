import React, { Component } from "react";
import styled from "styled-components";


const pageId = [1, 2, 3, 4, 5, 6, 7];


export class Heading extends React.Component { 
    render() {
    
    const title = this.props.title;
    const id = this.props.id;

    return (
      <div>
        <Headline>
            <Title>{title}</Title>
                <Progress size={id}>
                        <div className="bar"></div>
                        <div></div>
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
    font-weight: 300;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    color: #146670;
    font-size: 32px;
    font-weight: 600;
`

const Progress = styled.span`
    padding-top: 0.6rem;
    padding-left: 0.1rem;
    display: flex;
    justify-content: space-between;
    width: 40%;
    position: relative;
    div{
        width: 6px;
        height: 6px;
        background-color: #E0E0E0;
        border-radius: 50%;
    }
    div.bar{
        background-color: #5C306B;
        width: ${props => 
            props.size*14
        }%; 
        border-radius: 20px;
        position: absolute;
        
    }
`