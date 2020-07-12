import { renderHook, act } from '@testing-library/react-hooks';
import { v4 as uuidv4 } from 'uuid';

import { useInventoryReducer } from './useInventoryReducer';

jest.mock('uuid');

const initialInventoryItem = {
  id: '1',
  title: 'Test product title',
  price: 0.25,
  image: 'https://test.image.jpg',
  description: 'Test product description quite long',
};

const additionalInventoryItem = {
  title: 'Additional item title',
  price: 1000,
  image: 'https://additional.image.jpg',
  description: 'Shorter description',
};

describe('initial state', () => {
  it('should initialize with given initial state', () => {
    const initialState = {
      [initialInventoryItem.id]: initialInventoryItem,
    };

    const { result } = renderHook(() => useInventoryReducer(initialState));

    expect(result.current.inventoryState).toEqual(initialState);
  });

  it('should initialize empty if no initial state is provided', () => {
    const { result } = renderHook(() => useInventoryReducer());

    expect(result.current.inventoryState).toEqual({});
  });
});

describe('"add" action', () => {
  it('should add an item to the inventory', () => {
    uuidv4.mockImplementation(() => '2');

    const initialState = {
      [initialInventoryItem.id]: initialInventoryItem,
    };
    const expectedState = {
      [initialInventoryItem.id]: initialInventoryItem,
      '2': { ...additionalInventoryItem, id: '2' },
    };

    const { result } = renderHook(() => useInventoryReducer(initialState));

    act(() => {
      result.current.inventoryDispatch({
        type: 'add',
        payload: additionalInventoryItem,
      });
    });

    expect(result.current.inventoryState).toEqual(expectedState);

    uuidv4.mockReset();
  });
});

describe('"remove" action', () => {
  it('should remove an item from the inventory', () => {
    const initialState = {
      [initialInventoryItem.id]: initialInventoryItem,
    };

    const { result } = renderHook(() => useInventoryReducer(initialState));

    act(() => {
      result.current.inventoryDispatch({
        type: 'remove',
        payload: { id: initialInventoryItem.id },
      });
    });

    expect(result.current.inventoryState).toEqual({});
  });

  it('should do nothing if there is no item in the inventory with the given ID', () => {
    const initialState = {
      [initialInventoryItem.id]: initialInventoryItem,
    };

    const { result } = renderHook(() => useInventoryReducer(initialState));

    act(() => {
      result.current.inventoryDispatch({
        type: 'remove',
        payload: { id: 'x' },
      });
    });

    expect(result.current.inventoryState).toEqual(initialState);
  });

  it('should do nothing if inventory is empty', () => {
    const { result } = renderHook(() => useInventoryReducer());

    act(() => {
      result.current.inventoryDispatch({
        type: 'remove',
        payload: { id: '1' },
      });
    });

    expect(result.current.inventoryState).toEqual({});
  });
});

describe('"change" action', () => {
  it("should change the value of an item's property given the item ID, field name and new value", () => {
    const fieldToChange = 'title';
    const newValue = 'New test title';

    const expectedState = {
      [initialInventoryItem.id]: {
        ...initialInventoryItem,
        [fieldToChange]: newValue,
      },
    };
    const initialState = {
      [initialInventoryItem.id]: initialInventoryItem,
    };

    const { result } = renderHook(() => useInventoryReducer(initialState));

    act(() => {
      result.current.inventoryDispatch({
        type: 'change',
        payload: {
          id: initialInventoryItem.id,
          field: fieldToChange,
          value: newValue,
        },
      });
    });

    expect(result.current.inventoryState).toEqual(expectedState);
  });

  it('should do nothing if there is no item in the inventory with the given ID', () => {
    const fieldToChange = 'title';
    const newValue = 'New test title';

    const initialState = {
      [initialInventoryItem.id]: initialInventoryItem,
    };

    const { result } = renderHook(() => useInventoryReducer(initialState));

    act(() => {
      result.current.inventoryDispatch({
        type: 'change',
        payload: {
          id: 'x',
          field: fieldToChange,
          value: newValue,
        },
      });
    });

    expect(result.current.inventoryState).toEqual(initialState);
  });

  it('should do nothing if invalid field is given', () => {
    const fieldToChange = 'invalidFieldName';
    const newValue = 'New test title';

    const initialState = {
      [initialInventoryItem.id]: initialInventoryItem,
    };

    const { result } = renderHook(() => useInventoryReducer(initialState));

    act(() => {
      result.current.inventoryDispatch({
        type: 'change',
        payload: {
          id: initialInventoryItem.id,
          field: fieldToChange,
          value: newValue,
        },
      });
    });

    expect(result.current.inventoryState).toEqual(initialState);
  });
});
