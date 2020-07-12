import { getTotalAmount } from './getTotalAmount';

it("should return a sum of all items' prices multiplied by their quantities", () => {
  const expectedAmount = 550;

  const items = {
    '1': {
      price: 200,
      quantity: 2,
    },
    '2': {
      price: 50,
      quantity: 3,
    },
  };

  const result = getTotalAmount(items);

  expect(result).toBe(expectedAmount);
});

it("should return the price of the only element if it's quantity is 1", () => {
  const expectedAmount = 5;

  const items = {
    '1': {
      price: 5,
      quantity: 1,
    },
  };

  const result = getTotalAmount(items);

  expect(result).toBe(expectedAmount);
});

it("should return the price of the only element multiplied by it's quantity", () => {
  const expectedAmount = 5750;

  const items = {
    '1': {
      price: 1150,
      quantity: 5,
    },
  };

  const result = getTotalAmount(items);

  expect(result).toBe(expectedAmount);
});
