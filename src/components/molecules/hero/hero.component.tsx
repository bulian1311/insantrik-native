import React from "react";
import { Text } from "@ui-kitten/components";
import { Spacer } from "../../atoms";
import { Props } from "./hero.props";
import { StyledView, StyledBg } from "./hero.styled";

const img =
  "https://c.dns-shop.ru/thumb/st1/fit/760/600/edb08b939947185287e28a5ac914aa0a/q93_e9349a31c9a86791d189cd4141ea88989164c21f355a5158d38fc850853c9f60.jpg.webp";

export const Hero = ({ children, title, description, ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledBg
        source={{
          uri: img,
        }}
        resizeMode="cover"
      >
        <Text category="h2" status="control">
          {title}
        </Text>
        <Spacer pos="top" size="xl" />
        {description && <Text status="control">{description}</Text>}
        {children}
      </StyledBg>
    </StyledView>
  );
};
