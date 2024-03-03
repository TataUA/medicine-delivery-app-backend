import express from "express";
import shopController from "../controllers/shop-controller.js";

const shopRouter = express.Router();

shopRouter.get("/", shopController.getShop);

export default shopRouter;
