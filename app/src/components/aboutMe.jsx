import React from "react"
import styled from "styled-components"
import Container from "./container"
import Image from "../components/image"
import { useStaticQuery, graphql } from "gatsby"
import { FiLink, FiMail } from "react-icons/fi"

export default () => {
    const data = useStaticQuery(graphql`
        {
            sanityPersonalDetails {
                name
                personalBlurb
                email
                location
                visa
                github
                twitter
            }
        }
    `)

    return (
        <Container
            ID="aboutme"
            Color="white"
            BGColor="#47a0b7"
            Header="About Me"
            Info={data.sanityPersonalDetails.personalBlurb}
        >
            <Grid>
                <div>
                    <Image />
                </div>
                <MyDetailsList>
                    <Item Name="Name" Value={data.sanityPersonalDetails.name} />
                    <Item Name="Visa" Value={data.sanityPersonalDetails.visa} />
                    <Item
                        Name="Located"
                        Value={data.sanityPersonalDetails.location}
                    />
                    <ItemMail
                        Name="Email"
                        Value={data.sanityPersonalDetails.email}
                    />
                    <ItemLink
                        Name="LinkedIn"
                        Value={data.sanityPersonalDetails.twitter}
                    />
                    <ItemLink
                        Name="GitHub"
                        Value={data.sanityPersonalDetails.github}
                    />
                </MyDetailsList>
            </Grid>
        </Container>
    )
}

const Item = ({ Name, Value }) => (
    <MyDetailsListItem>
        <span>{Name}</span>
        {Value}
    </MyDetailsListItem>
)

const ItemLink = ({ Name, Value }) => (
    <MyDetailsListItem>
        <span>{Name}</span>
        <a rel="noopener noreferrer" target="_blank" href={Value}>
            {Value} <FiLink />
        </a>
    </MyDetailsListItem>
)

const ItemMail = ({ Name, Value }) => (
    <MyDetailsListItem>
        <span>{Name}</span>
        <a href={"mailto:" + Value}>
            {Value} <FiMail />
        </a>
    </MyDetailsListItem>
)

const MyDetailsList = styled.ul`
    margin-top: 40px;

    @media (min-width: 960px) {
        margin-top: 0;
    }
`

const MyDetailsListItem = styled.li`
    text-transform: lowercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #ccc;
    line-height: 30px;
    margin-bottom: 20px;
    font-weight: bold;
    display: grid;
    align-items: center;
    align-content: center;

    > span {
        display: inline-block;
        font-weight: normal;
        margin-right: 5px;

        &:after {
            content: ":";
        }
    }

    > a {
        color: white;
        text-decoration: none;
        line-height: 30px;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
    }

    @media (min-width: 960px) {
        grid-template-columns: 160px auto;
    }
`

const Grid = styled.section`
    display: grid;
    grid-template-rows: auto auto;
    justify-items: center;

    @media (min-width: 960px) {
        grid-template-columns: 50% 50%;
        justify-items: left;
    }
`


<html lang="en"><head><meta charSet="utf-8"/>


<meta http-equiv="x-ua-compatible" content="ie=edge"/><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/><style data-href="/styles.68abd32a2178401a0385.css">@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);html{font-family:Open Sans,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;scroll-behavior:smooth;font-size:100%}body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1,h2{font-weight:400}li,ul{list-style:none;padding:0;margin:0}li,p{line-height:1.8em}input,textarea{font-size:100%}pre{padding:16px;background-color:#111;color:#fff;border-radius:3px}</style><meta name="generator" content="Gatsby 2.21.31"/><title data-react-helmet="true">Home | Murray Jack</title><meta data-react-helmet="true" name="description" content="Murray Jack Resume"/><meta data-react-helmet="true" property="og:title" content="Home"/><meta data-react-helmet="true" property="og:description" content="Murray Jack Resume"/><meta data-react-helmet="true" property="og:type" content="website"/><meta data-react-helmet="true" name="twitter:card" content="summary"/><meta data-react-helmet="true" name="twitter:creator" content="@murrayjack"/><meta data-react-helmet="true" name="twitter:title" content="Home"/><meta data-react-helmet="true" name="twitter:description" content="Murray Jack Resume"/><script data-react-helmet="true" src="/hotjar.js" type="text/javascript"></script><link rel="icon" href="/favicon-32x32.png?v=be86c24c269f324c94da1eac2bc360f0"/><link rel="manifest" href="/manifest.webmanifest"/><meta name="theme-color" content="#2f3c4f"/><link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png?v=be86c24c269f324c94da1eac2bc360f0"/><link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png?v=be86c24c269f324c94da1eac2bc360f0"/><link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png?v=be86c24c269f324c94da1eac2bc360f0"/><link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png?v=be86c24c269f324c94da1eac2bc360f0"/><link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png?v=be86c24c269f324c94da1eac2bc360f0"/><link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png?v=be86c24c269f324c94da1eac2bc360f0"/><link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png?v=be86c24c269f324c94da1eac2bc360f0"/><link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png?v=be86c24c269f324c94da1eac2bc360f0"/><link rel="preconnect" href="https://cdn.sanity.io"/><link as="script" rel="preload" href="/463c400049cbfdd14f898fba69d967c9e731d23c-a93586c700de74ec1102.js"/><link as="script" rel="preload" href="/framework-8770a85f31e633ae9ae0.js"/><link as="script" rel="preload" href="/app-a7db11bec08d7e6ef7c8.js"/><link as="script" rel="preload" href="/component---src-pages-index-js-12c72feca81ac29336cc.js"/><link as="script" rel="preload" href="/styles-d3259afcef90844d6efd.js"/><link as="script" rel="preload" href="/874060615a85bd1fa3f9260cfc3d0693fe70cb91-564a1e259411b483c266.js"/><link as="script" rel="preload" href="/a3fed73d1a5c81e3d973a1160dd790f865976ce1-9f0f1ff0a1686d305651.js"/><link as="script" rel="preload" href="/5e2a4920-9337d7d47f3fa6bc72b4.js"/><link as="script" rel="preload" href="/webpack-runtime-5ea0a3bb007b0e5d4423.js"/><link as="fetch" rel="preload" href="/page-data/index/page-data.json" crossorigin="anonymous"/><link as="fetch" rel="preload" href="/page-data/app-data.json" crossorigin="anonymous"/></head><body><div id="___gatsby"><div style="outline:none" tabindex="-1" id="gatsby-focus-wrapper"><header class="sc-AxjAm bcMPWx"><section class="sc-AxirZ bJCmFu"><div class="sc-AxhCb eSwYtm"><h1 class="sc-AxiKw eSbheu">Murray Jack</h1><ul class="sc-AxhUy fxWvvr"><li class=""></li><li class=""><a href="#aboutme">About Me</a></li><li class=""><a href="#experience">Work Experience</a></li><li class=""><a href="#contact">Contact</a></li></ul></div></section></header><main><div id="aboutme" class="sc-fzpans cKJzHK"></div><div id="aboutme1" class="sc-fzozJi iXsVN"><article class="sc-fzoLsD fYZyZu"><h2 class="sc-Axmtr hvJMgY">About Me</h2><p class="sc-AxmLO gmtmqV">A highly experienced developer who is passionate about UX&amp;UI, Accessibility and front end technology, when I am not working I referee roller derby here in Melbourne.</p><section class="sc-fznZeY gJlwEu"><div><div class="sc-fzplWN hRBsWH"><div class=" gatsby-image-wrapper" style="position:relative;overflow:hidden"><div aria-hidden="true" style="width:100%;padding-bottom:92%"></div><img aria-hidden="true" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAAE+ElEQVQ4yyWSaUyUVxSGPxCGZWQTQW3UKq4VFwiiImBFBmSbMiIMmywjqKgIDAwimwwCAwgoFh0YlmFQAUVaFbVWaQ20ogWX+qNJbeIPaN2KxNamNemvp5/0x5tzc27Ok/Pe9wqhyQGscV/APEd7Vi50wWPZR6xYOY+AhNVEqHwJVfoREbcVeZIMWZw3S2SubIieT1DyKoKiNyOTb0Cm2ETAjk34hngihMX6sdF7CR/Pc2GhqwPzZzswx8kBH5kn28SBwJ2+BCm3EC4CI1Xb8Y91Z22UC17xroSneBMi3sliNhMgyl/hhaBtPsrx9nKOd5RgaK/B1N5CR9cZeq60c+VaFwZjBRWf55GrO0SWrgB1TTpbVatIKopEZyyjQH+Euh4dx1oKKD1RgqAzaui+08b5sRZ+Gn/Mi+cT/P3vO97/9Z4Xk79wYqCEvieXSRFBiqwIUivSSKpUsr9OTbFRzb7WQ5SdzebyaAX6i1cR6jv9OFmegq5/P5cf9vJq8hlv/3nJzxOvefrbU070G1GkpvDxssX4x28joTSbjJO5JBXG0dCRT2pDFBmVgVR3FNB1cxChozcTvV5D20AB52838Or1OJO/v+T1uze0fHEan/VriNy4lHSZF7KQMLQDDynqMdF63cj5wXOkFG4hVRtHWrEG4/UBhOZjsehuJNNxrQSdKZbhR928nfqTyZdv6LnxJfHhPtRnRGBQK0nY7kGMNkeEniarVomqOBxlrpxd+eHk1hTTOzSE0GQopqEzj77vTRzrTOXWjTYmnj7nybMnDA/1kxe7DY3Cn9oUOUUJnxKv9kG2z4voPDk5Zw6jyAsk9fA2cqqLuDTyA4K+sZKqwiP0DDaiv3qc+/fu8mBklG9Gb/H4x0GyY8SBAE/U4X5UZAZS2boD37ilJNUmEVv1GWFJq4lSbWa/rpiLd++JwJoy2nqb0V/Q0X2zmRvDt/l29DJ3hgeZnJqkqPAAXm5z2L56OXsKvdF0BhGW5U5MVSKhhyPFoNYiT9/CoVNV9IzcRzCV1jI4dJ0T3dUMPjYw+XaC8ee/MjU1xYs/pqguzyHO3wO1IoDSGgWhmmBiinyJL9pE0F5vgvZtJHjnJ2hO6jg/MoJwydBEZUEx5aYGTF/XMTb+FUNjI/T2X0cRl8aC+W4khfhTsScKVWQgizw8Wb51CQEZfsjzN6DKDiE5I5AjjXV03RMt12cdpGZvBgfrSynpzKGwKRPprLlY2jhjIXHCytYJM0tbLKztkFjbY2Vlh6XEnrmLFxCZvB59o5aqplLyDI2cuy+GUhobTWFyBjlVeSTmK3FbuwpzczvsneZg5+jKTLvZSGc6YyN1EusHzcJa6oggSPDxdqfXpOekoYsCYzvGu98hpESGUlmio679FGnqZKQOruIGjthKnUXNxsbWGWsbJ1EO4vlD30ms4tYzbHFft4bO3m5qu85S0tIkWhbfcHew+M8OpFPRdJpdqdlYmEsRzKTTUInVBzlgJVq1tLKftmpt4zgtCxHo4rYCbasJbXUZZcYmLjwYRchXpbNDsYM9ag0HM8o5ECdH5rNehNoyw+J/kESUlQiTWNiJoJmYmVlPW7aUziJRU4Cm6CjHTG30PRpD0GjLidgVjyxyJzHKNGo0aeyNChYHrMVQHKa3spSIgUg+BGKPmbktsx1dCPReh9uiBYSpEtmdmUnV2Q76Ho7xH95OGDsT/z9rAAAAAElFTkSuQmCC" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;opacity:1;transition-delay:500ms"/><noscript><picture><source srcset="/static/f7f1c28f6af992b4839d9c898547c184/5db04/murrayjack.png 75w,