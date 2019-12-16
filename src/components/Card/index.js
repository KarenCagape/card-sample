import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Link from "../Link";
import RichText from "../RichText";
import Thumbnail from "../Thumbnail";

const CopyWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
`;

function Card(props) {
  const { thumbnail, content, actionLink } = props;
  
  return (
    <div>
      {thumbnail && <Thumbnail image={thumbnail} />}
      <CopyWrapper>
        <RichText>{content}</RichText>
        <Link marginTop={10} href={actionLink}>
          Read more
        </Link>
      </CopyWrapper>
    </div>
  );
}

Card.prototype = {
  thumbnail: PropTypes.string,
  content: PropTypes.node.isRequired,
  actionLink: PropTypes.string.isRequired
};

export default Card;
