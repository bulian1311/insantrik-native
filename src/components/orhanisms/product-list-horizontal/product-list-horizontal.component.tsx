import React from "react";
import { Text } from "@ui-kitten/components";
import { ProductItem } from "../../molecules";
import { Props } from "./product-list-horizontal.props";
import { StyledView } from "./product-list-horizontal.styled";

export const ProductListHorizontal = ({ products, ...props }: Props) => {
  return (
    <StyledView {...props}>
      <Text>ProductList</Text>
    </StyledView>
  );
};
