import React from 'react';

import { InventoryItem } from '../InventoryItem';
import { InventoryItemNew } from '../InventoryItemNew';

import styles from './Inventory.module.css';

export const Inventory = ({
  items,
  onInventoryItemChange,
  onInventoryItemRemove,
  onNewInventoryItemSubmit,
}) => (
  <div className={styles.inventory} data-cy="inventory">
    {items?.map((item) => (
      <InventoryItem
        {...item}
        key={item.id}
        onChange={onInventoryItemChange}
        onRemove={onInventoryItemRemove}
      />
    ))}

    <InventoryItemNew onSubmit={onNewInventoryItemSubmit} />
  </div>
);
