const Reducers = (state, action) => { 
  if (action.type === "CLEAR_CART") {
    return { ...state, item: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    let amount = state.totalAmount
    let updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
          amount -= curElem.price;
          return { ...curElem, quantity: curElem.quantity - 1};
        }
        return curElem;
      })
      .filter((curElem) => curElem.quantity !== 0);
      return {
        ...state,
        item: updatedCart, totalAmount: amount,
        item: state.item.filter((curElem) => {
          return curElem.id !== action.payload;
        }),
      };
  }
    

  if (action.type === "INCREMENT") {
    // we need to find out which item is clicked
    let amount = state.totalAmount
    let updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        amount += curElem.price;
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    }); 
    return { ...state, item: updatedCart, totalAmount: amount};
  }

  if (action.type === "DECREMENT") {
    // we need to find out which item is clicked
    let amount = state.totalAmount
    let updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
          amount -= curElem.price;
          return { ...curElem, quantity: curElem.quantity - 1};
        }
        return curElem;
      })
      .filter((curElem) => curElem.quantity !== 0);
    return { ...state, item: updatedCart, totalAmount: amount };
  }

  return state;
};

export default Reducers;


