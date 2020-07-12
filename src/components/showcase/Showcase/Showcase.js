import React from 'react';

import { ShowcaseItem } from '../ShowcaseItem';

import styles from './Showcase.module.css';

export const Showcase = ({ items, onAddItemToCart }) => (
  <div className={styles.showcase}>
    {items?.length ? (
      items.map((item) => (
        <ShowcaseItem {...item} key={item.id} onAdd={onAddItemToCart} />
      ))
    ) : (
      <div className={styles.emptyWrapper}>
        No products are currently available.
      </div>
    )}
  </div>
);
