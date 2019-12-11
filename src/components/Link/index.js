import React from "react";
import styled from "styled-components";
import { color } from "styled-system";
import { IoIosArrowRoundForward } from "react-icons/io";

const Link = styled.a`
  ${color}
  
  svg {
      vertical-align: middle;
  }
`;

Link.defaultProps = {
  color: "blue"
};

export default props => (
  <Link>
    {props.children} <IoIosArrowRoundForward />
  </Link>
);
