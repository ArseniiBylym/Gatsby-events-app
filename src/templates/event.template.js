import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const EventWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 3rem 3rem;
    margin: 0;
    background: linear-gradient(45deg, #5DBFC0, #084A5A, #051924);
    position: relative;
    .header {
        padding-top: 150px;
        color: white;
        text-align: center;
    }
    .content {
        width: 100%;
        padding: 0;
        margin: 0;
        color: white;
    }
`;

const Event = ({data}) => {
    const {title, date, place, details} = data.markdownRemark.frontmatter
    return (
        <Layout>
            <EventWrapper>
                <h1 className="header">{title}</h1>
                <h4 className="date">{date}</h4>
                <h4>{place}</h4>
                <div 
                    className="content"
                    dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
                />
            </EventWrapper>
        </Layout>
    )
}

export const query = graphql`
    query EventQuery($slug: String!){
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                date(formatString: "MMMM Do, YYYY")
                place
                title
                details
            }
        }
    }
`;

export default Event;