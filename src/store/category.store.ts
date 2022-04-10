import { RootStore } from "./root.store";

export class CategoryStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  big = {
    id: "big-krvpdh",
    name: "Большие размеры",
    categories: [],
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
