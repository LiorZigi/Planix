export type Products = {
  disposables: Product[];
  food: Product[];
};

export type Product = {
  name: string;
  icon: string;
  type: 'disposable' | 'food';
  quantity: number;
  id: number;
};

export const products: Products = {
  disposables: [
    {
      name: 'cups',
      icon: 'cups',
      type: 'disposable',
      quantity: 10,
      id: 1,
    },
    {
      name: 'plates',
      icon: 'plates',
      type: 'disposable',
      quantity: 10,
      id: 2,
    },
    {
      name: 'forks',
      icon: 'forks',
      type: 'disposable',
      quantity: 10,
      id: 3,
    },
    {
      name: 'knives',
      icon: 'knives',
      type: 'disposable',
      quantity: 10,
      id: 4,
    },
    {
      name: 'spoons',
      icon: 'spoons',
      type: 'disposable',
      quantity: 10,
      id: 5,
    },
  ],
  food: [
    {
      name: 'bread',
      icon: 'bread',
      type: 'food',
      quantity: 10,
      id: 6,
    },
    {
      name: 'apples',
      icon: 'apples',
      type: 'food',
      quantity: 10,
      id: 7,
    },
    {
      name: 'peppers',
      icon: 'peppers',
      type: 'food',
      quantity: 10,
      id: 8,
    },
    {
      name: 'oranges',
      icon: 'oranges',
      type: 'food',
      quantity: 10,
      id: 9,
    },
    {
      name: 'cucumbers',
      icon: 'cucumbers',
      type: 'food',
      quantity: 10,
      id: 10,
    },
    {
      name: 'tomatos',
      icon: 'tomatos',
      type: 'food',
      quantity: 10,
      id: 11,
    },
    {
      name: 'eggs',
      icon: 'eggs',
      type: 'food',
      quantity: 10,
      id: 12,
    },
    {
      name: 'pargit',
      icon: 'pargit',
      type: 'food',
      quantity: 10,
      id: 13,
    },
  ],
};
