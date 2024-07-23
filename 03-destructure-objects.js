const restaurant = {
  name: "The Foodie's Delight",
  location: "123 Main Street, Cityville",
  dishes: [
    {
      name: "Spaghetti Carbonara",
      price: 12.99,
      ingredients: ["spaghetti", "bacon", "eggs", "parmesan cheese"],
    },
    {
      name: "Chicken Tikka Masala",
      price: 14.99,
      ingredients: ["chicken", "tomato sauce", "cream", "spices"],
    },
    {
      name: "Margherita Pizza",
      price: 10.99,
      ingredients: ["dough", "tomato sauce", "mozzarella cheese", "basil"],
    },
  ],
};

const {dishes: [, , { ingredients: dittoIngredients }]} = restaurant;

console.log(dittoIngredients);
    