import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controllers";

const createProductRoute = Router()

createProductRoute.post("/products",createProductController)

export default createProductRoute