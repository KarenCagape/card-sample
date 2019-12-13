import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  background-size: cover;
  background-position: center top;
  padding-top: 72%;
  background-image: url(${props => props.src});
`;

export default Thumbnail;
