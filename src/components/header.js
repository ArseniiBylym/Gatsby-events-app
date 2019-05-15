import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../images/logo.png';

const HeaderWrapper = styled.header`
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    div {
        margin: 0 auto;
        padding: 0.5rem;
        ul {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: flex-end;
            list-style: none;
            margin: 0;
            li {
                margin: 0;
                margin-right: 3rem;
                &.logo {
                    margin-right: auto;
                }
                a {
                    img {
                        width: 100px;
                    }
                }
                .nav_link {
                    color: white;
                    &.active {
                        color: red;
                    }
                    &:after {
                        display: block;
                        content: '';
                        border-bottom: 2px solid white;
                        transform: scaleX(0);
                        transition: transform 0.25s ease-in-out;
                    }
                    &:hover:after,
                    &.active:after {
                        transform: scaleX(1);
                    }
                }
            }
        }
    }
`;

const Header = ({ siteTitle }) => (
    <HeaderWrapper>
        <div>
            <ul>
                <li className="logo">
                    <Link to="/">
                        <img src={logo} alt="Upcoming event logo" />
                    </Link>
                </li>
                <li>
                    <h4>
                        <Link to="/events" className="nav_link" activeClassName="active">
                            Events
                        </Link>
                    </h4>
                </li>
                <li>
                    <h4>
                        <Link to="/archive" className="nav_link" activeClassName="active">
                            Archive
                        </Link>
                    </h4>
                </li>
                <li>
                    <h4>
                        <Link to="/about" className="nav_link" activeClassName="active">
                            About
                        </Link>
                    </h4>
                </li>
            </ul>
        </div>
    </HeaderWrapper>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
