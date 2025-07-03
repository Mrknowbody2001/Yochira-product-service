import express from "express";
import CreateProduct, {
  deleteProduct,
  getAllProduct,
  getNewProductId,
  getOneProduct,
  updateProduct,
} from "../controllers/ProductController.js";
import validateProduct from "../middlewares/ProductValidater.js";

const productRouter = express.Router();

// 1. Specific routes FIRST
//get new product id
productRouter.get("/new-id", getNewProductId);
//create a product
productRouter.post("/create", validateProduct, CreateProduct);
//update
productRouter.put("/update/:id", validateProduct, updateProduct);
//delete
productRouter.delete("/delete/:id", deleteProduct);
//get all
productRouter.get("/", getAllProduct);

// 2. Dynamic route LAST
productRouter.get("/:id", getOneProduct); // This must be last!

export default productRouter;
