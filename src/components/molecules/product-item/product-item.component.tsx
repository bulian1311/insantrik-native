import React from "react";
import { Props } from "./product-item.props";
import { Image } from "../../atoms";
import { priceFormater } from "../../../utils";
import { Card, Text } from "@ui-kitten/components";

export const ProductItem = ({ product }: Props) => {
  const price: string = priceFormater.format(Number(product.price));
  return (
    <Card style={{ width: 156 }}>
      <Image
        width={115}
        height={160}
        src={"https://hwpics.sliza.ru/insantrik_ru/80/72/28072.jpeg"}
      />
      <Text>{product.name}</Text>
      <Text status="primary">{price}</Text>
    </Card>
  );
};
