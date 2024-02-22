export const useProducts = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://example.com/product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      image: "https://example.com/p roduct2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://example.com/product3.jpg",
    },
  ];

  function chiamataHooks() {
    console.log("Sono nell'hooks");
  }

  return {
    products,
    chiamataHooks,
  };
};
