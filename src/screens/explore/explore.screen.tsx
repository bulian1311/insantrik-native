import React from "react";
import { Text, Divider } from "@ui-kitten/components";
import { Layout } from "../../containers";
import { Spacer, CategoryItem } from "../../components";

export const ExploreScreen = () => {
  return (
    <Layout scrolled>
      <Spacer size="s" />
      <Text category="h5">Женщинам</Text>

      <Divider />
    </Layout>
  );
};
