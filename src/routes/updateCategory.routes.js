import { Router } from "express";
import updateCategoryController from "../controllers/categories/updateCategory.controllers";

const upDateCategoryRoute = Router()

upDateCategoryRoute.patch("/:id",updateCategoryController)

export default upDateCategoryRoute