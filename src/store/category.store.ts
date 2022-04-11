import { RootStore } from "./root.store";

export class CategoryStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  big = {
    id: "big-krvpdh",
    name: "Большие размеры",
    categories: [
      {
        name: "Брюки",
        id: "hdy76cct5e20",
        icon: "pants",
      },
      {
        name: "Пижамы",
        id: "g853nd0f51dd",
        icon: "pijamas",
      },
      {
        name: "Туники",
        id: "ggjf97g5e3mb",
        icon: "blouse-2",
      },
      {
        name: "Костюмы",
        id: "g9mmas4413bd",
        icon: "women-suit",
      },
      {
        name: "Платья",
        id: "v03mqiyz5x41",
        icon: "cute-dress",
      },
      {
        name: "Футболки",
        id: "d00f73n4g1xa",
        icon: "casual-t-shirt",
      },
      {
        name: "Ночные сорочки",
        id: "gown48d7vz",
        icon: "dress-with-pockets",
      },
      {
        name: "Сарафаны",
        id: "d94n22g29raq",
        icon: "sleeveless-drees",
      },
      {
        name: "Халаты",
        id: "4m98f4z1d0g2",
        icon: "women-robe",
      },
    ],
  };

  fmale = {
    id: "fmale-jfrcdw",
    name: "Женщинам",
    categories: [],
  };

  male = {
    id: "male-mfitkd",
    name: "Мужчинам",
    categories: [],
  };

  children = {
    id: "children-jrpoxm",
    name: "Детям",
    categories: [],
  };

  home = {
    id: "for-home-dhfrty",
    name: "Для дома",
    categories: [
      {
        name: "Постельное белье",
        id: "4j7b1f8l6sgo",
        icon: "woman-bathing-suit",
      },
    ],
  };

  jewelry = {
    id: "jewelry-jtwqpb",
    name: "Украшения",
    categories: [],
  };

  hit = {
    id: "hit-ntmsd",
    name: "Хиты продаж",
    categories: [],
  };
}
