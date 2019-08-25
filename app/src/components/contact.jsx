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

const TextArea = styled.textarea`
    height: 200px;
    border-radius: 3px;
    border: none;
    width: 100%;
    text-indent: 10px;
`

const Button = styled.button`
`

export default () =>
    <Container 
        Color="white" 
        BGColor="#4a9f87"
        Header="Contact Me"
        Info="Drop me a line using the contact form below"
    >
        <Wrapper>
            <form name="contact" method="POST" data-netlify="true">
                <ul>
                    <li>
                        <Label for="name" >Name</Label>
                        <Input id="name" type="text" name="name" />
                    </li>
                    <li>
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" name="email" />
                    </li>
                    <li>
                        <Label for="message">Messge</Label>
                        <TextArea id="message" name="message"></TextArea>
                    </li>
                    <li>
                        <Button type="submit">Send</Button>
                    </li>
                </ul>
            </form>
            <div>
                linked in
            </div>
        </Wrapper>
    </Container>