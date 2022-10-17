import { Router } from "express";
import listCategoryControllers from "../controllers/categories/listCategories.controllers";

const listAllCategories = Router()
 
listAllCategories.get("/categories", listCategoryControllers)

export default listAllCategories