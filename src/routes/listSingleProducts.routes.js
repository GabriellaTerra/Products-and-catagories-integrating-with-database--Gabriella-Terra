import { Router } from "express";
import listeSingleProductController from "../controllers/products/listSingleProduct.controllers";

const listSingleProductRoute  = Router()

listSingleProductRoute.get("/:id", listeSingleProductController)

export default listSingleProductRoute