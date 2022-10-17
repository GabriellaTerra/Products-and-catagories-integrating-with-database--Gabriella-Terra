import listAllProducts from "../../services/products/listAllProducts.services";

const listAllProductsControllers = async (req, res) => {
  try {
    const products = await listAllProducts();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
export default listAllProductsControllers;
