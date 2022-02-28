/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

const Page = ({ children }) => {
  return <div style={{ display: "grid", gap: "24px" }}>{children}</div>
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
