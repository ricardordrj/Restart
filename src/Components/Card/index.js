import React from "react";
import PropTypes from "prop-types";
import { Wrapper, CardLink } from "./styles";

const Card = ({ title, url }) => (
  <Wrapper>
    <CardLink href={url} bgImg={url}>
      <div>
        <h4>{title}</h4>
      </div>
    </CardLink>
  </Wrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
