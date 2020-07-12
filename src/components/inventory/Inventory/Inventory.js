import React from 'react';

import { InventoryItem } from '../InventoryItem';
import { InventoryItemNew } from '../InventoryItemNew';

export const Inventory = ({
  items,
  onInventoryItemChange,
  onInventoryItemRemove,
  onNewInventoryItemSubmit,
}) => (
  <div data-cy="inventory">
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
