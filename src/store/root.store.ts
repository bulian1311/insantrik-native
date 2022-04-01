import { configure } from "mobx";

import { ProductStore } from "./product.store";

configure({ enforceActions: "always" });

export class RootStore {
  productStore: ProductStore;

  constructor() {
    this.productStore = new ProductStore(this);
  }
}
