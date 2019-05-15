/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from '../styles/global.style';
import Header from './header';

const LayoutWrapper = styled.div`
    margin: 0 0;
    padding-top: 0;
    width: 100vw;
    height: 100vh;
    position: relative;
    main {
        width: 100%;
        height: 100%;
    }
`;

const Layout = ({ children }) => {
    return (
        <LayoutWrapper>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
        </LayoutWrapper>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
