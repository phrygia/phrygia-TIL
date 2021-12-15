import styled from "@emotion/styled";
import React from "react";

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

const StyledButton = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: #e63b19;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  /* transition: background ${(p) => p.theme.transition}; */
  &:hover,
  &:focus {
    background-color: #c70d3a;
  }
`;

export default Button;
