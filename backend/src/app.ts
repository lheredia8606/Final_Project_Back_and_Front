import express from "express";
import cors from "cors";
import { productController } from "./routes/product/products.route.js";
import { userController } from "./routes/user/users.route.js";
import { prdQtyController } from "./routes/productQty/ProductQty.route.js";
import { orderController } from "./routes/order/order.route.js";
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello hello");
});
app.use(userController);
app.use(productController);
app.use(prdQtyController);
app.use(orderController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
