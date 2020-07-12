import React from 'react';

import { locals } from 'locals';
import styles from './CartTotal.module.css';

export const CartTotal = ({ amount }) => (
  <div className={styles.wrapper}>
    {locals.cart.total}: {amount}$
  </div>
);
