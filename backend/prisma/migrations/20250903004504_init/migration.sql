-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'client',
    "phone" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "inStock" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,
    "price" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientId" INTEGER NOT NULL,
    "workerId" INTEGER,
    "deadLine" DATETIME,
    "status" TEXT NOT NULL,
    CONSTRAINT "Orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Orders_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductQty" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    CONSTRAINT "ProductQty_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductQty_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
