import React, { Fragment } from "react";
import { Spacer } from "../../atoms";
import { NavLink } from "../nav-link";
import { Props } from "./list-horizontal.props";
import { Text, Divider } from "@ui-kitten/components";
import { StyledView, StyledFlatList } from "./list-horizontal.styled";

export const ListHorizontal = ({ title, navigateTo, ...props }: Props) => {
  return (
    <Fragment>
      <StyledView>
        <Text category="h6">{title}</Text>

        {navigateTo && <NavLink title="Подробнее" navigateTo={navigateTo} />}
      </StyledView>

      <Spacer pos="top" size="xs" />
      <Divider />
      <Spacer pos="top" size="s" />

      <StyledFlatList
        {...props}
        bounces={false}
        horizontal={true}
        decelerationRate={0.8}
        showsHorizontalScrollIndicator={false}
      />
    </Fragment>
  );
};
