import React from "react";
import { Text } from "@ui-kitten/components";
import {
  Spacer,
  CategoryListHorizontal,
  ProductListHorizontal,
} from "../../components";
import { Layout } from "../../containers";
import { StyledHeader } from "./home.styled";

export const HomeScreen = () => {
  return (
    <Layout>
      <StyledHeader>
        <Text category="h5">HomeScreen</Text>
      </StyledHeader>
      <Spacer />
      <CategoryListHorizontal />

      <ProductListHorizontal products={[]} />
    </Layout>
  );
};
