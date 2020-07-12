import React from 'react';

import { useCartReducer } from 'hooks/useCartReducer';
import { useInventoryReducer } from 'hooks/useInventoryReducer';
import { Wrapper } from 'components/common/Wrapper';
import { Column } from 'components/common/Column';
import { Title } from 'components/common/Title';
import { Showcase } from 'components/showcase/Showcase';
import { Cart } from 'components/cart/Cart';
import { Inventory } from 'components/inventory/Inventory';

const inventoryInitialState = {
  '1': {
    id: '1',
    title: 'Test product title',
    price: 0.25,
    image: 'https://images.dog.ceo/breeds/beagle/n02088364_10362.jpg',
    description: 'Test product description quite long',
  },
};

export const App = () => {
  const { cartState, cartDispatch } = useCartReducer();
  const { inventoryState, inventoryDispatch } = useInventoryReducer(
    inventoryInitialState
  );

  function handleCartItemAdd(id) {
    cartDispatch({ type: 'add', payload: inventoryState[id] });
  }

  function handleCartItemRemove(id) {
    cartDispatch({ type: 'remove', payload: { id } });
  }

  function handleInventoryItemChange(id, field, value) {
    inventoryDispatch({ type: 'change', payload: { id, field, value } });

    if (cartState[id]) {
      cartDispatch({ type: 'change', payload: { id, field, value } });
    }
  }

  function handleInventoryItemRemove(id) {
    inventoryDispatch({ type: 'remove', payload: { id } });

    if (cartState[id]) {
      cartDispatch({ type: 'remove', payload: { id } });
    }
  }

  function handleNewInventoryItemSubmit(item) {
    inventoryDispatch({ type: 'add', payload: item });
  }

  return (
    <Wrapper>
      <Column>
        <Title>List of Products</Title>
        <Showcase
          items={Object.values(inventoryState)}
          onAddItemToCart={handleCartItemAdd}
        />
      </Column>
      <Column>
        <Title>Shopping Cart</Title>
        <Cart
          items={Object.values(cartState)}
          onCartItemRemove={handleCartItemRemove}
        />
      </Column>
      <Column>
        <Title>Inventory</Title>
        <Inventory
          items={Object.values(inventoryState)}
          onInventoryItemChange={handleInventoryItemChange}
          onInventoryItemRemove={handleInventoryItemRemove}
          onNewInventoryItemSubmit={handleNewInventoryItemSubmit}
        />
      </Column>
    </Wrapper>
  );
};
