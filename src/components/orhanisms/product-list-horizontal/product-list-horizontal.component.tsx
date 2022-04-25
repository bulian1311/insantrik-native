import React, { Fragment } from "react";
import { ListRenderItem, ListRenderItemInfo } from "react-native";
import { Spacer } from "../../atoms";
import { ProductItem, ListHorizontal } from "../../molecules";
import { Props } from "./product-list-horizontal.props";
import { StyledView } from "./product-list-horizontal.styled";
import { TProduct } from "../../../types";

export const ProductListHorizontal = ({
  title,
  navigateTo,
  products,
}: Props) => {
  const renderItem: ListRenderItem<TProduct> = ({
    item,
    index,
  }: ListRenderItemInfo<TProduct>) => (
    <Fragment>
      {index > 0 && <Spacer pos="left" />}
      <ProductItem product={item} />
    </Fragment>
  );

  return (
    <StyledView>
      <ListHorizontal
        title={title || ""}
        navigateTo={navigateTo}
        data={products}
        keyExtractor={(product: TProduct) => product.name}
        renderItem={renderItem}
      />
    </StyledView>
  );
};
