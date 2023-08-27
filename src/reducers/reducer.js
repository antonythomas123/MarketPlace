import { getUsersCollection } from "../services/database";

export const initialState = {
  basket: [],
};

const dispatchUpdateCartToDatabase = (updatedCart, loggedInUserEmail) => {
  const users = getUsersCollection();
  const user = users.findOne({ email: loggedInUserEmail }); 
  if (user) {
    user.cart = updatedCart;
    users.update(user);
  }
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
  
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const updatedBasket = [...state.basket, action.item];
      dispatchUpdateCartToDatabase(updatedBasket, action.email);
      return {
        ...state,
        basket: updatedBasket,
      };
    default:
      return state;
  }
};

export default reducer;
