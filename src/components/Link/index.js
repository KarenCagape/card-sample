import React from "react";
import styled from "styled-components";
import { color, typography } from "styled-system";
import { IoIosArrowRoundForward } from "react-icons/io";

const Link = styled.a`
  ${ color }
  ${ typography }
  cursor: pointer;

  svg {
    transform: none;
    transition: transform 0.3s ease;
  }
  :hover svg {
    transform: translateX(10px);
  }
  
`;

Link.defaultProps = {
  color: "blue",
  fontFamily: 'default',
  fontWeight: '500'
};

export default props => (
  <Link {...props}>
    {props.children} <IoIosArrowRoundForward size="1.5em" style={ {verticalAlign: "middle", fontWeight: '500'} } />
  </Link>
);
