import express from "express";
import productController from '../controllers/product-controller';

const router = express.Router();
router.post("/createProduct", productController.createProduct);
router.get("/getProducts", productController.getProducts);
router.get("/getProductById", productController.getProductById);
router.put("/updateProduct", productController.updateProduct);
router.delete("/deleteProduct", productController.deleteProduct);

export default router;