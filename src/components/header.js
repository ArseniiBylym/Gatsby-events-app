import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background: rebeccapurple;
    margin-bottom: 1.45rem;
    div {
        margin: 0 auto;
        max-width: 960px;
        padding: 1.45rem 1.0875rem;
        h1 {
            margin: 0;
            a {
                color: white;
            }
        }
    }
`;

const Header = ({ siteTitle }) => (
    <HeaderWrapper>
        <div>
            <h1>
                <Link to="/">
                    {siteTitle}
                </Link>
            </h1>
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
