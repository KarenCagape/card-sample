import React from "react";

import Link from "../Link";
import RichText from "../RichText";
import Thumbnail from "../Thumbnail";

function Card(props) {
  return (
    <>
      <Thumbnail src='https://cdn2.hubspot.net/hub/5713048/hubfs/iStock-482835011-min.jpg?width=650&name=iStock-482835011-min.jpg' />
      <RichText>
        <h3>Sample title</h3>
        <p>summary of post shite!</p>
      </RichText>
      <Link src={"google.com"}>Read more</Link>
    </>
  );
}

export default Card;
