import { Router } from "express";
import listSingleCategoryController from "../controllers/categories/listSingleCategory.controllers";

const listSingleCategoryRoute = Router()

listSingleCategoryRoute.get("/:id",listSingleCategoryController)

export default listSingleCategoryRoute