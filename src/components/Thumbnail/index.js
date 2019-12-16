// import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Thumbnail = styled.div`
  background-size: cover;
  background-position: center top;
  padding-top: 72%;
  background-image: url(${props => props.image});
`;

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired
}

export default Thumbnail;
