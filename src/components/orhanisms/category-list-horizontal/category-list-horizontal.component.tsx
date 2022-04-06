import React from "react";
import { CategoryItem, ListHorizontal } from "../../molecules";

const categories = [
  { name: "dress", id: "sdfsdgsfadasd1" },
  { name: "dress", id: "sdfsdgsfadasd2" },
  { name: "dress", id: "sdfsdgsfadasd3" },
  { name: "dress", id: "sdfsdgsfadasd4" },
  { name: "dress", id: "sdfsdgsfadasd5" },
  { name: "dress", id: "sdfsdgsfadasd6" },
];

export const CategoryListHorizontal = () => {
  return (
    <ListHorizontal
      data={categories}
      keyExtractor={(category: any) => category.id}
      renderItem={({ item }: any) => <CategoryItem category={item.name} />}
      title="Категории"
      navigateTo="Home"
    />
  );
};
