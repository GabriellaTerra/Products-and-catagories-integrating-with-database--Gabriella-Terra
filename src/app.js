import  express from 'express'
import "dotenv/config";
import routesCreateCategories from "./routes/createCategory.routes"
import listAllCategories from "./routes/listAllCategories.routes";
import createProductRoute from "./routes/createProduct.routes";
import listAllProductsRoutes from "./routes/listAllProducts.routes";
import upDateCategoryRoute from "./routes/updateCategory.routes";
import updateProductRoute from "./routes/updateProduct.routes";
import deleteProductRoute from "./routes/deleteProduct.routes";
import deleteCategoryRoute from "./routes/deleteCategory.routes";
import listSingleCategoryRoute from "./routes/listSingleCategory.routes";
import listSingleProductRoute from './routes/listSingleProducts.routes';
import listProductCategoryRoutes from './routes/listProductCategory.routes';
import { startDatabase } from './database';


const app = express();

app.use(express.json());

app.use("",routesCreateCategories )
app.use("",listAllCategories)
app.use("/categories",upDateCategoryRoute)
app.use("/categories",deleteCategoryRoute)
app.use("/categories",listSingleCategoryRoute)

app.use("/products/category", listProductCategoryRoutes)

app.use("",createProductRoute)
app.use("",listAllProductsRoutes)
app.use("/products",listSingleProductRoute)
app.use("/products",updateProductRoute)
app.use("/products",deleteProductRoute)



export default app.listen(3333, () => {
  startDatabase()
  console.log("Server running");
});
