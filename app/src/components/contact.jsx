import React from "react";
import Container from "./container";
import styled from "styled-components";

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
    height: 40px;
    border-radius: 3px;
    border: none;
    width: 100%;
    text-indent: 10px;
    font-size: 16px;
    color: #2f3c4f
`

const TextArea = styled.textarea`
    height: 200px;
    border-radius: 3px;
    border: none;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: #2f3c4f
    box-sizing: border-box;
`

const Button = styled.button`
    background-color: #2f3c4f;
    border: 0;
    height: 40px;
    color: white;
    width: 120px;
    font-size: 16px;
    border-radius: 3px;
`

const List = styled.ul`
    >li {
        margin-bottom: 10px;
    }
`

export default () =>
    <Container
        ID="contact"
        Color="white" 
        BGColor="#4a9f87"
        Header="Contact Me"
        Info="Drop me a line using the contact form below"
    >
        <Wrapper>
            <form name="Contact Form" method="POST" data-netlify="true" action="/thank-you">
                <input type="hidden" name="form-name" value="Contact Form" />

                <List>
                    <li>
                        <Label htmlFor="name" >Name</Label>
                        <Input placeholder="Your Name" id="name" type="text" name="name" />
                    </li>
                    <li>
                        <Label htmlFor="email">Email</Label>
                        <Input placeholder="me@example.com" id="email" type="email" name="email" />
                    </li>
                    <li>
                        <Label htmlFor="message">Message</Label>
                        <TextArea id="message" name="message"></TextArea>
                    </li>
                    <li>
                        <div data-netlify-recaptcha="true"></div>
                    </li>
                    <li>
                        <Button type="submit">Send</Button>
                    </li>
                </List>
            </form>
            <div>
               
            </div>
        </Wrapper>
    </Container>