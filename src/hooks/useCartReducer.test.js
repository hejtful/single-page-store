import { renderHook, act } from '@testing-library/react-hooks';

import { useCartReducer } from './useCartReducer';

const initialCartItem = {
  id: '1',
  title: 'Test product title',
  price: 0.25,
  image: 'https://test.image.jpg',
  description: 'Test product description quite long',
  quantity: 1,
};

const additionalCartItem = {
  id: '2',
  title: 'Additional item title',
  price: 1000,
  image: 'https://additional.image.jpg',
  description: 'Shorter description',
  quantity: 1,
};

describe('initial state', () => {
  it('should initialize with given initial state', () => {
    const initialState = {
      [initialCartItem.id]: initialCartItem,
    };

    const { result } = renderHook(() => useCartReducer(initialState));

    expect(result.current.cartState).toEqual(initialState);
  });

  it('should initialize empty if no initial state is provided', () => {
    const { result } = renderHook(() => useCartReducer());

    expect(result.current.cartState).toEqual({});
  });
});

describe('"add" action', () => {
  it('should add an item to the cart if it is not already in the cart', () => {
    const initialState = {
      [initialCartItem.id]: initialCartItem,
    };
    const expectedState = {
      [initialCartItem.id]: initialCartItem,
      [additionalCartItem.id]: { ...additionalCartItem },
    };

    const { result } = renderHook(() => useCartReducer(initialState));

    act(() => {
      result.current.cartDispatch({
        type: 'add',
        payload: additionalCartItem,
      });
    });

    expect(result.current.cartState).toEqual(expectedState);
  });

  it('should increment quantity of the item if it is already in the cart', () => {
    const initialState = {
      [initialCartItem.id]: initialCartItem,
    };
    const expectedState = {
      [initialCartItem.id]: {
        ...initialCartItem,
        quantity: 2,
      },
    };

    const { result } = renderHook(() => useCartReducer(initialState));

    act(() => {
      result.current.cartDispatch({
        type: 'add',
        payload: initialCartItem,
      });
    });

    expect(result.current.cartState).toEqual(expectedState);
  });
});

describe('"remove" action', () => {
  it('should remove an item from the cart', () => {
    const initialState = {
      [initialCartItem.id]: initialCartItem,
    };

    const { result } = renderHook(() => useCartReducer(initialState));

    act(() => {
      result.current.cartDispatch({
        type: 'remove',
        payload: { id: initialCartItem.id },
      });
    });

    expect(result.current.cartState).toEqual({});
  });

  it('should do nothing if there is no item in the cart with the given ID', () => {
    const initialState = {
      [initialCartItem.id]: initialCartItem,
    };

    const { result } = renderHook(() => useCartReducer(initialState));

    act(() => {
      result.current.cartDispatch({
        type: 'remove',
        payload: { id: 'x' },
      });
    });

    expect(result.current.cartState).toEqual(initialState);
  });

  it('should do nothing if cart is empty', () => {
    const { result } = renderHook(() => useCartReducer());

    act(() => {
      result.current.cartDispatch({
        type: 'remove',
        payload: { id: '1' },
      });
    });

    expect(result.current.cartState).toEqual({});
  });
});

describe('"change" action', () => {
  it("should change the value of an item's property given the item ID, field name and new value", () => {
    const fieldToChange = 'title';
    const newValue = 'New test title';

    const expectedState = {
      [initialCartItem.id]: {
        ...initialCartItem,
        [fieldToChange]: newValue,
      },
    };
    const initialState = {
      [initialCartItem.id]: initialCartItem,
    };

    const { result } = renderHook(() => useCartReducer(initialState));

    act(() => {
      result.current.cartDispatch({
        type: 'change',
        payload: {
          id: initialCartItem.id,
          field: fieldToChange,
          value: newValue,
        },
      });
    });

    expect(result.current.cartState).toEqual(expectedState);
  });

  it('should do nothing if there is no item in the cart with the given ID', () => {
    const fieldToChange = 'title';
    const newValue = 'New test title';

    const initialState = {
      [initialCartItem.id]: initialCartItem,
    };

    const { result } = renderHook(() => useCartReducer(initialState));

    act(() => {
      result.current.cartDispatch({
        type: 'change',
        payload: {
          id: 'x',
          field: fieldToChange,
          value: newValue,
        },
      });
    });

    expect(result.current.cartState).toEqual(initialState);
  });

  it('should do nothing if invalid field is given', () => {
    const fieldToChange = 'invalidFieldName';
    const newValue = 'New test title';

    const initialState = {
      [initialCartItem.id]: initialCartItem,
    };

    const { result } = renderHook(() => useCartReducer(initialState));

    act(() => {
      result.current.cartDispatch({
        type: 'change',
        payload: {
          id: initialCartItem.id,
          field: fieldToChange,
          value: newValue,
        },
      });
    });

    expect(result.current.cartState).toEqual(initialState);
  });
});
