import { Router } from "express";
import deleteProductController from "../controllers/products/deleteProduct.controllers";

const deleteProductRoute = Router()

deleteProductRoute.delete("/:id",deleteProductController)

export default deleteProductRoute