import React from "react";
import Container from "./container";
import styled from "styled-components";
import { H2, P } from "./Styles";

const Wrapper = styled.div`
    display: grid;
    grid-gap: 80px;
    grid-template-columns: 50% 50%;
`;

const Label = styled.label`
    display: block;
    line-height: 1.8em;
`

const Input = styled.input`
    height: 30px;
    border-radius: 3px;
    border: none;
    width: 100%;
    text-indent: 10px;
`

export default () =>
    <Container 
        Color="white" 
        BGColor="#4a9f87"
        Header="Contact Me"
        Info="Drop me a line using the contact form below"
    >
        <Wrapper>
            <form>
                <ul>
                    <li>
                        <Label>Name</Label>
                        <Input />
                    </li>
                    <li>
                        <Label>EMail</Label>
                        <Input />
                    </li>
                    <li>
                        <Label>Messge</Label>
                        <textarea></textarea>
                    </li>
                    <li>
                        <button>Send</button>
                    </li>
                </ul>
            </form>
            <div>
                linked in
            </div>
        </Wrapper>
    </Container>