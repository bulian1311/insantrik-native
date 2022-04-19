import React from "react";
import { Props } from "./image.props";
import { StyledImageWrapper, StyledImage } from "./image.styled";
import noImage from "../../../../assets/no-image.png";

export const Image = ({ src, height, width }: Props) => {
  const source = src ? { uri: src } : noImage;

  return (
    <StyledImageWrapper>
      <StyledImage
        width={width}
        height={height}
        style={{ resizeMode: "cover" }}
        source={source}
      />
    </StyledImageWrapper>
  );
};
