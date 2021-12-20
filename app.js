import express from "express";
import mongoose from "mongoose";
import productRouter from "./src/routes/product.js";
import cors from "cors";
async function main() {
  mongoose.connect(
    "mongodb+srv://as7abulkahf:5750@cluster0.dxfz8.mongodb.net/commercedb?retryWrites=true&w=majority"
  );
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(productRouter);

  app.listen(5000, () => {
    console.log("done");
  });
}
main();
