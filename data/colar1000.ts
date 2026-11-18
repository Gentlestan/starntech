export const colar1000Packages = {
  neo: {
    id: "neo",
    name: "Colar1000 Neo",
    output: "300W",
    quantity: 2,
    unitPrice: 315000,
    price: 630000,
    freeGift: "1 FREE 18-inch Colar Solar Fan",
  },
  pro: {
    id: "pro",
    name: "Colar1000 Pro",
    output: "300W",
    quantity: 2,
    unitPrice: 325000,
    price: 650000,
    freeGift: "1 FREE 18-inch Colar Solar Fan",
  },
  plus: {
    id: "plus",
    name: "Colar1000 Plus",
    output: "500W",
    quantity: 1,
    unitPrice: 346000,
    price: 346000,
    freeGift: "1 FREE 18-inch Colar Solar Fan",
  },
} as const;

export type Colar1000PackageId = keyof typeof colar1000Packages;