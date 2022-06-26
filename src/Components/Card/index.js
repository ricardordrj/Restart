import React from 'react';
import PropTypes from "prop-types";
import { Wrapper, CardLink } from "./styles";
import vglow from "../../img/Vglow.jpg";

const Card = ({ title, url }) => (
  <Wrapper>
    <CardLink href={url} bgImg={vglow}>
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
