import React from 'react';

import { CartItem } from '../CartItem';
import { CartTotal } from '../CartTotal';
import { getTotalAmount } from 'utility/cart/getTotalAmount';

import styles from './Cart.module.css';

export const Cart = ({ items, onCartItemRemove }) => (
  <div className={styles.cart}>
    {items?.length ? (
      <>
        {items.map((item) => (
          <CartItem {...item} key={item.id} onRemove={onCartItemRemove} />
        ))}

        <CartTotal amount={getTotalAmount(items)} />
      </>
    ) : (
      <div className={styles.emptyWrapper}>Your cart is currently empty.</div>
    )}
  </div>
);
