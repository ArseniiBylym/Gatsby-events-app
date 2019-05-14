/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyle from '../styles/global.style';
import Header from './header';

const LayoutWrapper = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
`;

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <GlobalStyle />
            <LayoutWrapper>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built by{' '}
                    <a href={`mailto:${data.site.siteMetadata.author}`}>
                        {data.site.siteMetadata.author}
                    </a>{' '}
                    with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </LayoutWrapper>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
