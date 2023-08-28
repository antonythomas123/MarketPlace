import { getUsersCollection } from "../services/database";

export const initialState = {
  basket: [],
  directBuyNowProduct: [],
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

export const getBuyNowTotal = (directBuyNowProduct) =>
  directBuyNowProduct?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const updatedBasket = [...state.basket, action.item];
      dispatchUpdateCartToDatabase(updatedBasket, action.email);
      return {
        ...state,
        basket: updatedBasket,
      };
    case "REMOVE_FROM_CART":
      const filteredBasket = state.basket.filter(
        (item) => item.id !== action.item.id
      );
      dispatchUpdateCartToDatabase(filteredBasket, action.email);
      return {
        ...state,
        basket: filteredBasket,
      };
    case "BUY_NOW":
      return {
        ...state,
        directBuyNowProduct: [...state.directBuyNowProduct, action.item],
      };
    case "REMOVE_FROM_BUY_NOW":
      const filteredBuyNow = state.directBuyNowProduct.filter(
        (item) => item.id !== action.item.id
      );
      return {
        ...state,
        directBuyNowProduct: filteredBuyNow,
      };
    default:
      return state;
  }
};

export default reducer;
