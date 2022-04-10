import React from "react";
import { Props } from "./layout.props";
import { StyledLayout, StyledScrollView } from "./layout.styled";

export const Layout = ({
  children,
  scrolled = false,
  fullHeight = true,
  ...props
}: Props) => {
  if (scrolled) {
    return (
      <StyledLayout fullHeight={fullHeight} {...props}>
        <StyledScrollView showsVerticalScrollIndicator={false}>
          {children}
        </StyledScrollView>
      </StyledLayout>
    );
  }

  return (
    <StyledLayout fullHeight={fullHeight} {...props}>
      {children}
    </StyledLayout>
  );
};
