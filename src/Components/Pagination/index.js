import React from "react";
import PropTypes from "prop-types";
import pagination from "../../utils/pagination";
import Page from "./page";

import { ListWrapper, ListItem } from "./styles";

const Pagination = ({ total, activePage, pageLink }) => (
  <ListWrapper>
    {pagination({ total, activePage, pageLink }).map((page, index) => (
      <ListItem key={index} active={page === activePage}>
        <Page page={page} pageLink={`${pageLink}/${page}`} />
      </ListItem>
    ))}
  </ListWrapper>
);

Pagination.defaultProps = {
  pageLink: "",
  activePage: 1,
};

Pagination.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func,
};

export default Pagination;
