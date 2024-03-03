import express from "express";
import productController from "../controllers/product-controller.js";

const productRouter = express.Router();

productRouter.get("/:ownerId", productController.getProducts);

export default productRouter;
