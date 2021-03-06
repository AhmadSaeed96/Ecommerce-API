import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
});
const Product = mongoose.model("Product", productSchema);
export default Product;
