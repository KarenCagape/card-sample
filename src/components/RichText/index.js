// import React from 'react';
import styled from 'styled-components';
import { color, typography } from 'styled-system';

const RichText = styled.div`
    ${ color }
    ${ typography }

    h1,h2,h3,h4,h5,h6 {
        font-weight: 300;
        font-family: inherit;
        color: ${props => props.theme.colors.black};
    }
`;

RichText.defaultProps = {
    color: 'gray',
    fontFamily: 'default',
    fontWeight: '300',
    fontSize: 16
}

export default RichText;