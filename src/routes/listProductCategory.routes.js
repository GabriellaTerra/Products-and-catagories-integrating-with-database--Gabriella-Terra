import { Router } from "express";
import listProductCategoryController from "../controllers/products/listProductCategory.controllers";

const listProductCategoryRoutes = Router()

listProductCategoryRoutes.get("/:id",listProductCategoryController)
export default listProductCategoryRoutes