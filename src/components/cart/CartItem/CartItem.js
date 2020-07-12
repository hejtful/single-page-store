import React from 'react';

import styles from './CartItem.module.css';

export const CartItem = ({ id, title, price, quantity, onRemove }) => {
  function handleRemove() {
    onRemove(id);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <div className={styles.line}>
          <h4 className={styles.title}>{title}</h4>
          <span>{price}</span>
        </div>

        <div className={styles.line}>
          <span>Quantity:</span>
          <span>{quantity}</span>
        </div>
      </div>

      <div className={styles.removeWrapper}>
        <button type="button" onClick={handleRemove}>
          X
        </button>
      </div>
    </div>
  );
};
