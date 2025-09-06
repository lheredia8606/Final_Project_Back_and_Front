import express from "express";
import { authController } from "./routes/auth.route.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello hello");
});
app.use(authController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
