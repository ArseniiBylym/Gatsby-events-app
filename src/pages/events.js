import React from 'react';
import Layout from '../components/layout';
import EventCard from '../components/eventCard';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const EventsWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    background: linear-gradient(45deg, #5DBFC0, #084A5A, #051924);
    .container {
        padding-top: 150px;
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-flow: column nowrap;
    }
    .empty_header{
        color: white;
        text-align: center;
    }
`;

const Events = props => {
    const data = useStaticQuery(graphql`
        query EventsQuery {
            allMarkdownRemark(
                sort: {
                    order: ASC,
                    fields: [frontmatter___date]
                }
            ) {
                edges {
                    node {
                        excerpt
                        frontmatter {
                            date
                            title
                            slug
                            place
                            mainImage {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    `)
    const {edges} = data.allMarkdownRemark;
    const events =  edges.filter(({node}) => (new Date(node.frontmatter.date).getTime() > new Date().getTime()))
    return (
        <Layout>
            <EventsWrapper>
                <div className="container">
                {events.length === 0 ? (
                        <h2 className="empty_header">Events list is empty now</h2>
                    ) : (
                        events.map(({node}) => <EventCard key={node.frontmatter.slug} data={node}/>)
                    )
                }
                </div>
            </EventsWrapper>
        </Layout>
    )
}

export default Events;