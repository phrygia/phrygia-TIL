import styled from "@emotion/styled";
import React from "react";
import Icon from "./Icon";

const IconButton = ({ onClick, label, icon, size }) => {
  return (
    <StyledIconButton
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      <Icon icon={icon} size={size} />
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  color:#000
  cursor: pointer;
  font-size: 0.8rem;
  &:hover {
    color: #e63b19
  }
`;

export default IconButton;
