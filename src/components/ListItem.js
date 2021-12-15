import styled from "@emotion/styled";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const ListItem = ({ location, item }) => {
  return (
    <ListItemLink to={location.pathname + item.url}>{item.title}</ListItemLink>
  );
};

const ListItemLink = styled(Link)`
  display: inline-block;
  padding: 0.2rem 0;
  width: 100%;
  color: #000;
  text-decoration: none;
  /* transition: color ${(p) => p.theme.transition}; */
  &:hover,
  &:focus {
    color: #e63b19;
  }
`;

ListItem.propTypes = {
  location: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
};

export default ListItem;
