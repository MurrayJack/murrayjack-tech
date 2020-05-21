/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//import { push as Menu } from "react-burger-menu"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div id="outer-container">
            <Header siteTitle={data.site.siteMetadata.title} />
            {/* <Menu  pageWrapId="page-wrap" outerContainerId={ "outer-container" }> */}
                {/* <div>
                    <a href="/blog">Home</a>
                </div> */}
                {/* <div>
                    <a href="/blog">Blogs</a>
                </div> */}
            {/* </Menu> */}
            <main id="page-wrap">{children}</main>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
