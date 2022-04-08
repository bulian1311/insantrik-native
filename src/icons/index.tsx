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
    "bag-with-lock": iconProvider(
      require("../../assets/icons/bag-with-lock.png")
    ),
    belt: iconProvider(require("../../assets/icons/belt.png")),
    "blouse-1": iconProvider(require("../../assets/icons/blouse-1.png")),
    "blouse-2": iconProvider(require("../../assets/icons/blouse-2.png")),
    "blouse-3": iconProvider(require("../../assets/icons/blouse-3.png")),
    "blouse-with-buttons": iconProvider(
      require("../../assets/icons/blouse-with-buttons.png")
    ),
    blouse: iconProvider(require("../../assets/icons/blouse.png")),
    bodysuit: iconProvider(require("../../assets/icons/bodysuit.png")),
    "boot-1": iconProvider(require("../../assets/icons/boot-1.png")),
    boot: iconProvider(require("../../assets/icons/boot.png")),
    boots: iconProvider(require("../../assets/icons/boots.png")),
    "boots-1": iconProvider(require("../../assets/icons/boots-1.png")),
    "broad-brimmed-hat": iconProvider(
      require("../../assets/icons/broad-brimmed-hat.png")
    ),
    "business-suit-1": iconProvider(
      require("../../assets/icons/business-suit-1.png")
    ),
    "business-suit": iconProvider(
      require("../../assets/icons/business-suit.png")
    ),
    cap: iconProvider(require("../../assets/icons/cap.png")),
    "casual-t-shirt": iconProvider(
      require("../../assets/icons/casual-t-shirt.png")
    ),
    "classic-cufflinks": iconProvider(
      require("../../assets/icons/classic-cufflinks.png")
    ),
    "close-fitting-dress": iconProvider(
      require("../../assets/icons/close-fitting-dress.png")
    ),
    "cute-dress": iconProvider(require("../../assets/icons/cute-dress.png")),
    "dress-with-pockets": iconProvider(
      require("../../assets/icons/dress-with-pockets.png")
    ),
    "elegant-dress": iconProvider(
      require("../../assets/icons/elegant-dress.png")
    ),
    "fashion-hight-heels": iconProvider(
      require("../../assets/icons/fashion-hight-heels.png")
    ),
    "female-linguerie": iconProvider(
      require("../../assets/icons/female-linguerie.png")
    ),
    "femenine-lingerie": iconProvider(
      require("../../assets/icons/femenine-lingerie.png")
    ),
    "high-heel-boots-1": iconProvider(
      require("../../assets/icons/high-heel-boots-1.png")
    ),
    "high-heel-boots": iconProvider(
      require("../../assets/icons/high-heel-boots.png")
    ),
    "hight-heel-sandals": iconProvider(
      require("../../assets/icons/hight-heel-sandals.png")
    ),
    "hight-heels-shoes": iconProvider(
      require("../../assets/icons/hight-heels-shoes.png")
    ),
    "hoddie-1": iconProvider(require("../../assets/icons/hoddie-1.png")),
    "hoddie-2": iconProvider(require("../../assets/icons/hoddie-2.png")),
    "hoddie-3": iconProvider(require("../../assets/icons/hoddie-3.png")),
    "hoddie-4": iconProvider(require("../../assets/icons/hoddie-4.png")),
    "hoddie-5": iconProvider(require("../../assets/icons/hoddie-5.png")),
    "hoddie-6": iconProvider(require("../../assets/icons/hoddie-6.png")),
    "hoddie-7": iconProvider(require("../../assets/icons/hoddie-7.png")),
    "hoddie-8": iconProvider(require("../../assets/icons/hoddie-8.png")),
    hoddie: iconProvider(require("../../assets/icons/hoddie.png")),
    "jacket-1": iconProvider(require("../../assets/icons/jacket-1.png")),
    jacket: iconProvider(require("../../assets/icons/jacket.png")),
    knickers: iconProvider(require("../../assets/icons/knickers.png")),
    "knitted-cap": iconProvider(require("../../assets/icons/knitted-cap.png")),
    "knitted-mittens": iconProvider(
      require("../../assets/icons/knitted-mittens.png")
    ),
    "lingerie-clothes": iconProvider(
      require("../../assets/icons/lingerie-clothes.png")
    ),
    "men-shoe": iconProvider(require("../../assets/icons/men-shoe.png")),
    "neckline-dress": iconProvider(
      require("../../assets/icons/neckline-dress.png")
    ),
    "pair-of-gloves": iconProvider(
      require("../../assets/icons/pair-of-gloves.png")
    ),
    "pair-of-socks": iconProvider(
      require("../../assets/icons/pair-of-socks.png")
    ),
    panties: iconProvider(require("../../assets/icons/panties.png")),
    "pants-1": iconProvider(require("../../assets/icons/pants-1.png")),
    "pants-2": iconProvider(require("../../assets/icons/pants-2.png")),
    pants: iconProvider(require("../../assets/icons/pants.png")),
    pijamas: iconProvider(require("../../assets/icons/pijamas.png")),
    "polo-shirt": iconProvider(require("../../assets/icons/polo-shirt.png")),
    "pretty-dress": iconProvider(
      require("../../assets/icons/pretty-dress.png")
    ),
    "scarf-1": iconProvider(require("../../assets/icons/scarf-1.png")),
    scarf: iconProvider(require("../../assets/icons/scarf.png")),
    "short-sleeve-blouse": iconProvider(
      require("../../assets/icons/short-sleeve-blouse.png")
    ),
    "short-sleeve-drees": iconProvider(
      require("../../assets/icons/short-sleeve-drees.png")
    ),
    "shorts-1": iconProvider(require("../../assets/icons/shorts-1.png")),
    shorts: iconProvider(require("../../assets/icons/shorts.png")),
    "skirt-1": iconProvider(require("../../assets/icons/skirt-1.png")),
    "skirt-2": iconProvider(require("../../assets/icons/skirt-2.png")),
    "skirt-3": iconProvider(require("../../assets/icons/skirt-3.png")),
    skirt: iconProvider(require("../../assets/icons/skirt.png")),
    "sleeveless-blouse": iconProvider(
      require("../../assets/icons/sleeveless-blouse.png")
    ),
    "sleeveless-drees": iconProvider(
      require("../../assets/icons/sleeveless-drees.png")
    ),
    "sleeveless-t-shirt": iconProvider(
      require("../../assets/icons/sleeveless-t-shirt.png")
    ),
    "slip-slop": iconProvider(require("../../assets/icons/slip-slop.png")),
    sock: iconProvider(require("../../assets/icons/sock.png")),
    socks: iconProvider(require("../../assets/icons/socks.png")),
    "summer-dress": iconProvider(
      require("../../assets/icons/summer-dress.png")
    ),
    "sweater-1": iconProvider(require("../../assets/icons/sweater-1.png")),
    sweater: iconProvider(require("../../assets/icons/sweater.png")),
    "sweater-jumper": iconProvider(
      require("../../assets/icons/sweater-jumper.png")
    ),
    "t-shirt": iconProvider(require("../../assets/icons/t-shirt.png")),
    tie: iconProvider(require("../../assets/icons/tie.png")),
    ties: iconProvider(require("../../assets/icons/ties.png")),
    "tracksuit-1": iconProvider(require("../../assets/icons/tracksuit-1.png")),
    tracksuit: iconProvider(require("../../assets/icons/tracksuit.png")),
    "tradicional-hat": iconProvider(
      require("../../assets/icons/tradicional-hat.png")
    ),
    "trousers-1": iconProvider(require("../../assets/icons/trousers-1.png")),
    "trousers-2": iconProvider(require("../../assets/icons/trousers-2.png")),
    "trousers-3": iconProvider(require("../../assets/icons/trousers-3.png")),
    trousers: iconProvider(require("../../assets/icons/trousers.png")),
    underpants: iconProvider(require("../../assets/icons/underpants.png")),
    "waistcoat-1": iconProvider(require("../../assets/icons/waistcoat-1.png")),
    waistcoat: iconProvider(require("../../assets/icons/waistcoat.png")),
    wallet: iconProvider(require("../../assets/icons/wallet.png")),
    "winter-cap": iconProvider(require("../../assets/icons/winter-cap.png")),
    "woman-bathing-suit": iconProvider(
      require("../../assets/icons/woman-bathing-suit.png")
    ),
    "woman-bikini": iconProvider(
      require("../../assets/icons/woman-bikini.png")
    ),
    "woman-swimsuit": iconProvider(
      require("../../assets/icons/woman-swimsuit.png")
    ),
    "women-coat": iconProvider(require("../../assets/icons/women-coat.png")),
    "women-long-coat": iconProvider(
      require("../../assets/icons/women-long-coat.png")
    ),
    "women-robe": iconProvider(require("../../assets/icons/women-robe.png")),
    "women-suit": iconProvider(require("../../assets/icons/women-suit.png")),
    "women-tracksuit-1": iconProvider(
      require("../../assets/icons/women-tracksuit-1.png")
    ),
    "women-tracksuit": iconProvider(
      require("../../assets/icons/women-tracksuit.png")
    ),
    "woomen-socks": iconProvider(
      require("../../assets/icons/woomen-socks.png")
    ),
  },
};
