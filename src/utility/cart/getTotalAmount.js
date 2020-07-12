export const getTotalAmount = (items) =>
  Object.values(items).reduce(
    (sum, currentItem) => sum + currentItem.price * currentItem.quantity,
    0
  );
