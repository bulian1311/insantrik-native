import React from "react";
import { Text, useTheme } from "@ui-kitten/components";
import { Props } from "./category-item.props";
import { StyledWrapper, StyledView, StyledIcon } from "./category-item.styled";

export const CategoryItem = ({ category, ...props }: Props) => {
  const theme = useTheme();
  return (
    <StyledWrapper>
      <StyledView borderColor={theme["color-primary-default"]} {...props}>
        <StyledIcon name={category} pack="assets" />
      </StyledView>
      <Text appearance="hint">Блузки и рубашки</Text>
    </StyledWrapper>
  );
};
