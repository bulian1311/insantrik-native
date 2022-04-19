import { ComponentProps } from "react";
import { View } from "react-native";
import { TProduct } from "../../../types";

export type Props = ComponentProps<typeof View> & {
  products: TProduct[];
};
