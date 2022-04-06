import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import { Props } from "./nav-link.props";
import { StyledTouchableOpacity } from "./nav-link.styled";

export const NavLink = ({ title, children, navigateTo, params }: Props) => {
  const navigation: any = useNavigation();

  return (
    <StyledTouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate({ name: navigateTo, params: params })}
    >
      {title && (
        <Text category="h6" status="primary">
          {title}
        </Text>
      )}

      {children}
    </StyledTouchableOpacity>
  );
};
