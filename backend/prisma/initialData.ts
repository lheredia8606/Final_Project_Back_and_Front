import {
  Orders,
  ProductQty,
  Products,
  User,
} from "../generated/prisma/index.js";

export const users: User[] = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Thompson",
    email: "client@gmail.com",
    password: "a",
    role: "client",
    phone: "813 500  2587",
    isActive: true,
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Martinez",
    email: "worker@gmail.com",
    password: "a",
    role: "worker",
    phone: "813 300 5699",
    isActive: true,
  },
  {
    id: 3,
    firstName: "Sophia",
    lastName: "Reynolds",
    email: "admin@gmail.com",
    password: "a",
    role: "admin",
    phone: "813 564 0214",
    isActive: true,
  },
  {
    id: 4,
    firstName: "John",
    lastName: "Smit",
    email: "client2@gmail.com",
    password: "a",
    role: "client",
    phone: "813 500  2587",
    isActive: true,
  },
];

export const products: Products[] = [
  {
    id: 1,
    type: "bag",
    name: "some name 1",
    inStock: true,
    image: "/images/bag-01.png",
    price: 6.99,
  },
  {
    id: 2,
    type: "mug",
    name: "some name 2",
    inStock: true,
    image: "/images/couple-2.png",
    price: 25.99,
  },
  {
    id: 3,
    type: "bag",
    name: "some name 3",
    inStock: false,
    image: "/images/bag-02.png",
    price: 4.99,
  },
  {
    id: 4,
    type: "t_Shirt",
    name: "some name 4",
    inStock: true,
    image: "/images/my-heart-belongs-to-him.png",
    price: 19.99,
  },
];

export const orders: Orders[] = [
  {
    id: 1,
    deadLine: null,
    clientId: 1,
    workerId: null,
    status: "in_cart",
  },
  {
    id: 2,
    deadLine: new Date(),
    clientId: 1,
    workerId: 2,
    status: "processing",
  },
  {
    id: 3,
    deadLine: null,
    clientId: 1,
    workerId: 2,
    status: "ready",
  },
  {
    id: 4,
    deadLine: new Date(),
    clientId: 1,
    workerId: null,
    status: "ordered",
  },
];

export const productQty: Omit<ProductQty, "id">[] = [
  {
    orderId: 1,
    productId: 1,
    qty: 1,
  },
  {
    orderId: 1,
    productId: 2,
    qty: 5,
  },
  {
    orderId: 1,
    productId: 3,
    qty: 5,
  },
  {
    orderId: 2,
    productId: 2,
    qty: 2,
  },
  {
    orderId: 3,
    productId: 4,
    qty: 2,
  },
];
