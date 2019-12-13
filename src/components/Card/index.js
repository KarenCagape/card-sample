import React from "react";
import styled from "styled-components";

import Link from "../Link";
import RichText from "../RichText";
import Thumbnail from "../Thumbnail";

const CopyWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
`;


function Card(props) {
  return (
    <>
      <Thumbnail src="https://cdn2.hubspot.net/hub/5713048/hubfs/iStock-482835011-min.jpg?width=650&name=iStock-482835011-min.jpg" />
      <CopyWrapper>
        <RichText>
          <h3>Sample title</h3>
          <p>summary of post shit! shit! shit! shit! shit! shit! shit! shit! shit! shit!</p>
        </RichText>
        <Link marginTop={10} src={"google.com"}>Read more</Link>
      </CopyWrapper>
    </>
  );
}

export default Card;
