import { Router } from "express";
import updateProductController from "../controllers/products/updateProduct.controllers";

const updateProductRoute = Router()

updateProductRoute.patch("/:id",updateProductController)

export default updateProductRoute