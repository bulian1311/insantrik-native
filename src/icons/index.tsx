import { IconPack, IconProvider } from "@ui-kitten/components";
import { Image } from "react-native";

const iconProvider = (source: string): IconProvider<any> => ({
  toReactElement: ({ animation, ...props }) => (
    <Image {...props} source={source} />
  ),
});

export const AssetIconsPack: IconPack<any> = {
  name: "assets",
  icons: {
    dress: iconProvider(require("../../assets/icons/dress.png")),
  },
};
