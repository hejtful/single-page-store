import React from 'react';

import styles from './CartTotal.module.css';

export const CartTotal = ({ amount }) => (
  <div className={styles.wrapper}>Total: {amount}$</div>
);
