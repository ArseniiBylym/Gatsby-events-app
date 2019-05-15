import React from 'react';
import styled from 'styled-components';
import Layout from './layout';
import {useStaticQuery, StaticQuery, graphql, Link} from 'gatsby';
import Img from 'gatsby-image';
import {format} from 'date-fns';

const EventCardWrapper = styled.div`
    background-color: white;
    width:100%;
    margin: 1rem auto;
    padding: 1rem;
    box-shadow: 0 10px 10px -5px rgba(0,0,0,.5);
    border-radius: 5px;
    min-height: 200px;
    a {
        min-height: 200px;
        display: flex;
        flex-flow: row;
        align-items: center;
    }
    .info {
        width: 70%;
    }
    .image {
        width: 30%;
        height: 100%;
        img: {
            width: 100%;
            height: 100%;
        }
    }
    .title {
        text-align: center;
    }
`;

const EventCard = ({excerpt, data}) => {
    const {date, title, slug, place, mainImage} = data.frontmatter;
    return (
            <EventCardWrapper>
                <Link to={`/event${slug}`}>
                    <div className="info">
                        <h3 className="title">{title}</h3>
                        <h4 className="date">{format(new Date(date), "MMMM Do, YYYY")}</h4>
                        <h4 className="place">{place}</h4>
                    </div>
                    <div className="image">
                        <img src={mainImage[0].publicURL} alt=""/>
                    </div>
                </Link>
            </EventCardWrapper>
    )
}

export default EventCard;