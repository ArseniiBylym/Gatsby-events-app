/**
import { graphql } from 'gatsby';
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    return new Promise (resolve => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                slug
                            }
                        }
                    }
                }
            }
        `).then(results => {
            results.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: `/event${node.frontmatter.slug}`,
                    component: path.resolve('./src/templates/event.template.js'),
                    context: {
                        slug: node.frontmatter.slug,
                    }
                })
            })
            resolve();
        })
    })
}
