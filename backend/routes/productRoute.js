import express from "express";

import {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getAdminProducts,
  getProduct,
} from "../controllers/ProductController.js";
import { isAuthenticatedUser, AuthenticatedRole } from "../middleware/auth.js";



const router = express.Router();

//update deletecreate product require admin acess

router.get("/products", getAllProducts); //search,filter,products
router.get(
  "/admin/products",
  isAuthenticatedUser,
  AuthenticatedRole("admin"),
  getAdminProducts
);

router.post(
  "/product/new",
  isAuthenticatedUser,
  AuthenticatedRole("admin"),

  createProduct
);
router.put(
  "/product/:id",
  isAuthenticatedUser,
  AuthenticatedRole("admin"),
  updateProduct
);
router.delete(
  "/product/:id",
  isAuthenticatedUser,
  AuthenticatedRole("admin"),
  deleteProduct
);
router.get("/product/:id", getProduct);


export default router;


