import Product from "../models/Product.js";
import { ctrlWrapper } from "../decorators/ctrlWrapper.js";

const getProducts = async (req, res) => {
  try {
    const ownerId = req.params.ownerId;
    const result = await Product.find({ owner: ownerId });
    res.json(result);
  } catch (error) {
    res.json({ message: "Error getting products" });
  }
};

export default { getProducts: ctrlWrapper(getProducts) };
