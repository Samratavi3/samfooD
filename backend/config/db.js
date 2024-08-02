import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://samratavi94:foodsam@foodsam.kmyrm0y.mongodb.net/foodsam"
    )
    .then(() => console.log("DB connected"));
};
