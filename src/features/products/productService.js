const API_URL = "https://fake-store-api.mock.beeceptor.com/api/products";

const getProducts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export default {
  getProducts,
};
