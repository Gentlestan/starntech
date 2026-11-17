export const colar1000Packages = {
  neo: {
    id: "neo",
    name: "Colar1000 Neo",
    output: "300W",
    quantity: 2,
    unitPrice: 303000,
    price: 606000,
    freeGift: "1 FREE 18-inch Colar Solar Fan",
  },
  pro: {
    id: "pro",
    name: "Colar1000 Pro",
    output: "300W",
    quantity: 2,
    unitPrice: 312000,
    price: 624000,
    freeGift: "1 FREE 18-inch Colar Solar Fan",
  },
  plus: {
    id: "plus",
    name: "Colar1000 Plus",
    output: "500W",
    quantity: 1,
    unitPrice: 332000,
    price: 332000,
    freeGift: "1 FREE 18-inch Colar Solar Fan",
  },
} as const;

export type Colar1000PackageId = keyof typeof colar1000Packages;