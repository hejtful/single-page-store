import React from 'react';

import { locals } from 'locals';
import { ShowcaseItem } from '../ShowcaseItem';

import styles from './Showcase.module.css';

export const Showcase = ({ items, onAddItemToCart }) => (
  <div data-cy="showcase">
    {items?.length ? (
      items.map((item) => (
        <ShowcaseItem {...item} key={item.id} onAdd={onAddItemToCart} />
      ))
    ) : (
      <div className={styles.emptyWrapper}>
        {locals.showcase.empty_showcase}
      </div>
    )}
  </div>
);
