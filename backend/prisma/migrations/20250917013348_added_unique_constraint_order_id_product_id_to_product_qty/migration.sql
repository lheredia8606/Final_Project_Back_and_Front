/*
  Warnings:

  - A unique constraint covering the columns `[orderId,productId]` on the table `ProductQty` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductQty_orderId_productId_key" ON "ProductQty"("orderId", "productId");
