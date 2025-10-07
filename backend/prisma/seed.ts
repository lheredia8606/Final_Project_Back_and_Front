import { getPasswordHash } from "../src/routes/user/user.utils.js";
import { prisma } from "../src/utils/globals.js";
import { orders, productQty, products, users } from "./initialData.js";

async function main() {
  console.log("Seeding users...");
  for (const {
    email,
    firstName,
    id,
    isActive,
    lastName,
    password,
    phone,
    role,
  } of users) {
    await prisma.user.create({
      data: {
        id,
        role,
        email,
        firstName,
        isActive,
        lastName,
        password: await getPasswordHash(password),
        phone,
      },
    });
  }

  console.log("Seeding products...");
  for (const product of products) {
    await prisma.products.create({ data: product });
  }

  console.log("Seeding orders...");
  for (const order of orders) {
    await prisma.orders.create({ data: order });
  }

  console.log("Seeding productQty...");
  for (const pq of productQty) {
    await prisma.productQty.create({ data: pq });
  }

  console.log("Seeding completed ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
