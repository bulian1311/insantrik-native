import { makeObservable, observable, action } from "mobx";

import { RootStore } from "./root.store";

export class ProductStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      products: observable,
      loading: observable,
      setProducts: action,
      setLoading: action,
    });
  }

  products: any[] = [];
  loading: boolean = false;

  setProducts = (value: any[]) => {
    this.products = value;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };
}
