import axios from "axios";

axios.interceptors.response.use(undefined, (error) => {
  const { status } = error.response;
  if (status === 404) {
    console.error("Ошибка 404.");
  }

  if (status === 500) {
    console.error("Ошибка 500.");
  }

  if (error.message === "Network Error") {
    console.error("Ошибка сети.");
  }

  throw error.response;
});

export const api = axios.create({
  baseURL:
    "https://insantrik-shop-default-rtdb.europe-west1.firebasedatabase.app/",
});

export const fetchProducts = async () => {};
