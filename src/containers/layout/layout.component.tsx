import React from "react";
import { Props } from "./layout.props";
import { StyledLayout } from "./layout.styled";

export const Layout = ({ children, fullHeight = true, ...props }: Props) => {
  return (
    <StyledLayout fullHeight={fullHeight} {...props}>
      {children}
    </StyledLayout>
  );
};
