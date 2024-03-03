import Shop from "../models/Shop.js";
import { ctrlWrapper } from "../decorators/ctrlWrapper.js";

const getShop = async (req, res) => {
  try {
    const result = await Shop.find({});
    res.json(result);
  } catch (error) {
    res.json({ message: "Error getting shops" });
  }
};

export default { getShop: ctrlWrapper(getShop) };
