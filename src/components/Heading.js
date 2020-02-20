import React, { Component } from "react";
import styled from "styled-components";

export class Heading extends Component {
  render() {
    return (
      <div>
        <Headline>
            <div className="body">
                <Title> Lånedetaljer </Title>
                    <Progress>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Progress>
            </div>
        </Headline>
      </div>
    );
  }
}

export default Heading;

const Headline = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-family: Roboto;
    font-weight: 500;
    font-size: 32px;
`
const Progress = styled.ul`
    background-color: grey;
        li{
            list-style-type: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background-color: green;
        }
`