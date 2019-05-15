import React from 'react';
import {useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from '../components/seo';

const IndexPageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;
    .image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center; 
    }
`;

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { regex: "/main-bg/" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <IndexPageWrapper>
            <Layout>
                <SEO
                    title="Home"
                    keywords={[`gatsby`, `application`, `react`]}
                />
                <div className="image-wrapper">
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{position: 'static'}}/>
                </div>
                <Footer />
            </Layout>
        </IndexPageWrapper>
    );
};

export default IndexPage;
