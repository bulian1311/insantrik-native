import { configure } from "mobx";

import { ProductStore } from "./product.store";
import { CategoryStore } from "./category.store";

configure({ enforceActions: "always" });

export class RootStore {
  productStore: ProductStore;
  categoryStore: CategoryStore;

  constructor() {
    this.productStore = new ProductStore(this);
    this.categoryStore = new CategoryStore(this);
  }
}
