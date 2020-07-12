import { useReducer } from 'react';

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      if (state[action.payload.id]) {
        return {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            quantity: state[action.payload.id].quantity + 1,
          },
        };
      }
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          quantity: 1,
        },
      };

    case 'remove':
      const { [action.payload.id]: deletedItem, ...newState } = state;
      return newState;

    case 'change':
      if (!state[action.payload.id]?.[action.payload.field]) return state;
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          [action.payload.field]: action.payload.value,
        },
      };

    default:
      return state;
  }
}

export function useCartReducer(state = initialState) {
  const [cartState, cartDispatch] = useReducer(reducer, state);

  return { cartState, cartDispatch };
}
