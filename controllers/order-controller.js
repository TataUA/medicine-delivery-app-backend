import Order from "../models/Order.js";
import { ctrlWrapper } from "../decorators/ctrlWrapper.js";

const addOrder = async (req, res) => {
  const result = await Order.create(req.body);
  res.status(201).json(result);
};

export default { addOrder: ctrlWrapper(addOrder) };
