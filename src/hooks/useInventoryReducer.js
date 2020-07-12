import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      const id = uuidv4();
      return { ...state, [id]: { ...action.payload, id } };

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

export function useInventoryReducer(state = initialState) {
  const [inventoryState, inventoryDispatch] = useReducer(reducer, state);

  return { inventoryState, inventoryDispatch };
}
