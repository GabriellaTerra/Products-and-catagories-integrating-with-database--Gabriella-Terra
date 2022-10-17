import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controllers";


const routesCreateCategories = Router()

routesCreateCategories.post("/categories",createCategoryController)

export default routesCreateCategories