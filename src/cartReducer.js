export const initialState = {
  total: 0,
  products: []
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        payload: state.products
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        payload: state.products
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        total: payload.total
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
