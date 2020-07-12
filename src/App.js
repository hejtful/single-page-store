import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  function notifyAboutCartItemChange(field, title) {
    toast(`The ${field} of the ${title} item in your cart has changed.`, {
      toastId: 'cartItemChangeNotification',
      type: 'info',
    });
  }

  function notifyAboutCartItemRemoval(title) {
    toast(
      `${title} item is no longer available and it has been removed from your cart.`,
      {
        toastId: 'cartItemRemovalNotification',
        type: 'warning',
      }
    );
  }

  function handleCartItemAdd(id) {
    cartDispatch({ type: 'add', payload: inventoryState[id] });
  }

  function handleCartItemRemove(id) {
    cartDispatch({ type: 'remove', payload: { id } });
  }

  function handleInventoryItemChange(id, title, field, value) {
    inventoryDispatch({ type: 'change', payload: { id, field, value } });

    if (cartState[id]) {
      notifyAboutCartItemChange(field, title);
      cartDispatch({ type: 'change', payload: { id, field, value } });
    }
  }

  function handleInventoryItemRemove(id, title) {
    inventoryDispatch({ type: 'remove', payload: { id } });

    if (cartState[id]) {
      notifyAboutCartItemRemoval(title);
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
      <ToastContainer />
    </Wrapper>
  );
};
