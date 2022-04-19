import React from "react";
import { Props } from "./product-item.props";
import { Image } from "../../atoms";
import { Card, Text } from "@ui-kitten/components";

export const ProductItem = ({ product }: Props) => {
  const Header = () => <Image height={50} src={product.img} />;

  return (
    <Card>
      <Image
        width={120}
        height={180}
        src={"https://hwpics.sliza.ru/insantrik_ru/80/72/28072.jpeg"}
      />
      <Text>wewewesdsdsd</Text>
    </Card>
  );
};
