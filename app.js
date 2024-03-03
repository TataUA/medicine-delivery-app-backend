import express from "express";
import cors from "cors";
import "dotenv/config";

import shopRouter from "./routes/shop-router.js";
import productRouter from "./routes/product-router.js";
import orderRouter from "./routes/order-router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/shops", shopRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: `${message}` });
});

export default app;
