// import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, typography } from 'styled-system';

const RichText = styled.div`
    ${ color }
    ${ typography }

    h1,h2,h3,h4,h5,h6 {
        font-weight: 300;
        font-family: inherit;
        color: ${props => props.theme.colors.black};
        margin-top: 0;
    }
`;

RichText.defaultProps = {
    color: 'gray',
    fontFamily: 'default',
    fontWeight: '300',
    fontSize: 16
}

RichText.propTypes = {
    children: PropTypes.node.isRequired
}

export default RichText;