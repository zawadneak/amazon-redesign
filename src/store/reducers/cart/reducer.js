import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD': {
      return produce(state, draft => {
        const index = draft.findIndex(p => p.id === action.product.id);

        if (index >= 0) {
          draft[index].ammount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
            sumPrice: action.product.price,
          });
        }
      });
    }
    case '@cart/REMOVE': {
      return produce(state, draft => {
        const index = draft.findIndex(p => p.id === action.id);

        if (index >= 0) {
          draft.splice(index, 1);
        }
      });
    }
    case '@cart/UPDATE': {
      return produce(state, draft => {
        const index = draft.findIndex(p => p.id === action.id);

        if (index >= 0 && action.value > 0) {
          draft[index].amount = Number(action.value);
          draft[index].sumPrice = draft[index].price * draft[index].amount;
        }
      });
    }
    default:
      return [];
  }
}
