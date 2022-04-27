import React from "react";
import { Text } from "@ui-kitten/components";
import {
  Spacer,
  Hero,
  Carousel,
  CategoryListHorizontal,
  ProductListHorizontal,
} from "../../components";
import { Layout } from "../../containers";
import { StyledHeader } from "./home.styled";

export const HomeScreen = () => {
  return (
    <Layout scrolled>
      <StyledHeader>
        <Text category="h5">HomeScreen</Text>
      </StyledHeader>
      <Spacer />

      <Carousel
        marginX={16}
        items={[
          <Hero
            title="Recomended products"
            description="We recommend the best for you"
          />,
          <Hero
            title="Recomended products"
            description="We recommend the best for you"
          />,
          <Hero
            title="Recomended products"
            description="We recommend the best for you"
          />,
        ]}
      />

      <Spacer />
      <CategoryListHorizontal />

      <Spacer />
      <ProductListHorizontal
        title="Продукты"
        navigateTo="Home"
        products={[
          {
            price: 2150,
            currency: "Руб.",
            name: "Платье трикотажное Фатьма зк",
            size: "62, 64, 66, 68, 70, 72, 74, 76, 78, 80",
            material: "Кулирка",
            compoud: "Хлопок - 100%",
            color: "Синий, Фиолетовый",
            pic: "Абстракция",
            producer: "Иваново",
            heigth: "162-168 см",
            img: "https://hwpics.sliza.ru/insantrik_ru/20/69/92069.jpeg",
          },
          {
            price: 2150,
            currency: "Руб.",
            name: "Платье трикотажное Фатьма зк2",
            size: "62, 64, 66, 68, 70, 72, 74, 76, 78, 80",
            material: "Кулирка",
            compoud: "Хлопок - 100%",
            color: "Синий, Фиолетовый",
            pic: "Абстракция",
            producer: "Иваново",
            heigth: "162-168 см",
            img: "https://hwpics.sliza.ru/insantrik_ru/20/69/92069.jpeg",
          },
          {
            price: 2150,
            currency: "Руб.",
            name: "Платье трикотажное Фатьма зк3",
            size: "62, 64, 66, 68, 70, 72, 74, 76, 78, 80",
            material: "Кулирка",
            compoud: "Хлопок - 100%",
            color: "Синий, Фиолетовый",
            pic: "Абстракция",
            producer: "Иваново",
            heigth: "162-168 см",
            img: "https://hwpics.sliza.ru/insantrik_ru/20/69/92069.jpeg",
          },
        ]}
      />

      <Spacer />
      <ProductListHorizontal
        title="Продукты"
        navigateTo="Home"
        products={[
          {
            price: 2150,
            currency: "Руб.",
            name: "Платье трикотажное Фатьма зк",
            size: "62, 64, 66, 68, 70, 72, 74, 76, 78, 80",
            material: "Кулирка",
            compoud: "Хлопок - 100%",
            color: "Синий, Фиолетовый",
            pic: "Абстракция",
            producer: "Иваново",
            heigth: "162-168 см",
            img: "https://hwpics.sliza.ru/insantrik_ru/20/69/92069.jpeg",
          },
          {
            price: 2150,
            currency: "Руб.",
            name: "Платье трикотажное Фатьма зк2",
            size: "62, 64, 66, 68, 70, 72, 74, 76, 78, 80",
            material: "Кулирка",
            compoud: "Хлопок - 100%",
            color: "Синий, Фиолетовый",
            pic: "Абстракция",
            producer: "Иваново",
            heigth: "162-168 см",
            img: "https://hwpics.sliza.ru/insantrik_ru/20/69/92069.jpeg",
          },
          {
            price: 2150,
            currency: "Руб.",
            name: "Платье трикотажное Фатьма зк3",
            size: "62, 64, 66, 68, 70, 72, 74, 76, 78, 80",
            material: "Кулирка",
            compoud: "Хлопок - 100%",
            color: "Синий, Фиолетовый",
            pic: "Абстракция",
            producer: "Иваново",
            heigth: "162-168 см",
            img: "https://hwpics.sliza.ru/insantrik_ru/20/69/92069.jpeg",
          },
        ]}
      />
    </Layout>
  );
};
