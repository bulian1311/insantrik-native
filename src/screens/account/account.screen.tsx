import React from "react";
import { Text } from "@ui-kitten/components";
import { Layout } from "../../containers";
import { Props } from "./account.props";

export const AccountScreen = ({ ...props }: Props) => {
  return (
    <Layout>
      <Text category="h1">Account</Text>
    </Layout>
  );
};
