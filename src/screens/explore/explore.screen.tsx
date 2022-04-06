import React from "react";
import { Text } from "@ui-kitten/components";
import { Layout } from "../../containers";
import { Props } from "./explore.props";

export const ExploreScreen = ({ ...props }: Props) => {
  return (
    <Layout>
      <Text category="h1">Explore</Text>
    </Layout>
  );
};
