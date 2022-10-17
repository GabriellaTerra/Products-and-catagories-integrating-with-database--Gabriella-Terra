import { Router } from "express";
import deleteCategoryController from "../controllers/categories/deleteCategory.controllers";

const deleteCategoryRoute = Router()

deleteCategoryRoute.delete("/:id",deleteCategoryController)

export default deleteCategoryRoute