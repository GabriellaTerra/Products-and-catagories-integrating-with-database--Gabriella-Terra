import { Router } from "express";
import listAllProductsControllers from "../controllers/products/listAllProducts.controllers";


const listAllProductsRoutes = Router()

listAllProductsRoutes.get("/products",listAllProductsControllers)

export default listAllProductsRoutes