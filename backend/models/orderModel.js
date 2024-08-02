import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, requried: true },
  items: { type: Array, requried: true },
  amount: { type: Number, requried: true },
  address: { type: Object, requried: true },
  status: { type: String, default: "Food Processing" },
  date: { type: Date, default: Date.now() },
  payment: { type: Boolean, default: true },
});

const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
