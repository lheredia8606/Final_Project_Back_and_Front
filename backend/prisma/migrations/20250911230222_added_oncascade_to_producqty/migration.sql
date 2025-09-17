-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductQty" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    CONSTRAINT "ProductQty_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProductQty_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProductQty" ("id", "orderId", "productId", "qty") SELECT "id", "orderId", "productId", "qty" FROM "ProductQty";
DROP TABLE "ProductQty";
ALTER TABLE "new_ProductQty" RENAME TO "ProductQty";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
