import React from "react"
import Container from "./container"
import styled from "styled-components"
import theme from "../theme"

const Label = styled.label`
    display: block;
    line-height: 1.8em;
    margin-bottom: 5px;
`

const Input = styled.input`
    height: 40px;
    border-radius: 3px;
    border: none;
    width: 100%;
    text-indent: 10px;
    color: ${theme.DarkBlue};
`

const TextArea = styled.textarea`
    height: 200px;
    border-radius: 3px;
    border: none;
    width: 100%;
    padding: 10px;
    color: ${theme.DarkBlue};
    box-sizing: border-box;
    resize: none;
`

const Button = styled.button`
    background-color: ${theme.DarkBlue};
    border: 0;
    height: 40px;
    color: white;
    font-size: 16px;
    border-radius: 3px;
    width: 100%;

    @media (min-width: 960px) {
        width: 150px;
    }
`

const List = styled.ul`
    > li {
        margin-bottom: 10px;
    }
`

export default () => (
    <Container
        ID="contact"
        Color="white"
        BGColor={theme.Green}
        Header="Contact Me"
        Info="Drop me a line using the contact form below"
    >
        <form
            name="Contact Form"
            method="POST"
            data-netlify="true"
            action="/thank-you"
        >
            <input type="hidden" name="form-name" value="Contact Form" />

            <List>
                <li>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        placeholder="Your Name"
                        id="name"
                        type="text"
                        name="name"
                    />
                </li>
                <li>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        placeholder="me@example.com"
                        id="email"
                        type="email"
                        name="email"
                    />
                </li>
                <li>
                    <Label htmlFor="message">Message</Label>
                    <TextArea id="message" name="message"></TextArea>
                </li>
                <li>
                    <div data-netlify-recaptcha="true"></div>
                </li>
                <li>
                    <Button type="submit">Send Message</Button>
                </li>
            </List>
        </form>
    </Container>
)
