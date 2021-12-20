import { Router } from "express";
import Product from "../modles/product.model.js";
import productValidation from "../Validations/product.validation.js";
const productRouter = Router();

productRouter.get("/product", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    return res.status(400).json("Can not get Product");
  }
});
productRouter.get("/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    res.json(product);
  } catch (error) {
    return res.status(400).json({ error: "Can not get Product" });
  }
});
productRouter.post("/product", async (req, res) => {
  try {
    await productValidation.validateAsync(req.body);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
  const product = new Product(req.body);

  await product.save();
  res.json({ message: "ProductAdded" });
});

export default productRouter;
