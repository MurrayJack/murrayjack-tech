/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    // Destructure the createPage function from the actions object
    const { createPage } = actions

    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        id
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query')
    }

    // Create blog post pages.
    const posts = result.data.allMdx.edges

    // you'll call `createPage` for each result
    posts.forEach(({ node }, index) => {
        createPage({
            // This is the slug you created before
            // (or `node.frontmatter.slug`)
            path: node.frontmatter.path,
            // This component will wrap or MDX content
            component: path.resolve(
                `./src/components/blog/BlogPage.jsx`
            ),
            // You can use the values in this context in
            // our page layout component
            context: { id: node.id },
        })
    })
}

