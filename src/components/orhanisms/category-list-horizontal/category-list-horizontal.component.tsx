import React from "react";
import { CategoryItem, ListHorizontal } from "../../molecules";
import { StyledView } from "./category-list-horizontal.styled";

const categories = [
  { name: "dress", id: "sdfsdgsfadasd1", icon: "woman-bathing-suit" },
  { name: "dress", id: "sdfsdgsfadasd2", icon: "woman-bathing-suit" },
  { name: "dress", id: "sdfsdgsfadasd3", icon: "woman-bathing-suit" },
  { name: "dress", id: "sdfsdgsfadasd4", icon: "woman-bathing-suit" },
  { name: "dress", id: "sdfsdgsfadasd5", icon: "woman-bathing-suit" },
  { name: "dress", id: "sdfsdgsfadasd6", icon: "woman-bathing-suit" },
];

export const CategoryListHorizontal = () => {
  return (
    <StyledView>
      <ListHorizontal
        data={categories}
        keyExtractor={(category: any) => category.id}
        renderItem={({ item }: any) => <CategoryItem category={item} />}
        title="Категории"
        navigateTo="Home"
      />
    </StyledView>
  );
};
