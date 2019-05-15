import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    display: flex;
    justify-content: center;
    z-index: 100;
    a {
        color: white;
        &:hover,
        &:active{
            text-decoration: underline;
        }
    }
`;

const Footer = () => {
    const data = useStaticQuery(graphql`
        query SiteDataQuery {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    return (
        <FooterWrapper>
            <div>
                © {new Date().getFullYear()}, Built by{' '}
                <a href={`mailto:${data.site.siteMetadata.author}`}>
                    {data.site.siteMetadata.author}
                </a>{' '}
                with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
        </FooterWrapper>
    );
};

export default Footer;
