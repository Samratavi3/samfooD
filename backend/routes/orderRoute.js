import {
  placeOrder,
  userOrder,
  verifyOrder,
} from "../controllers/orderController.js";
import express from "express";
import authMiddleWare from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleWare, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleWare, userOrder);

export default orderRouter;
