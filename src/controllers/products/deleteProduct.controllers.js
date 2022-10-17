import deleteProductService from "../../services/products/deleteProduct.services";

const deleteProductController = async (req, res) => {
  

  try {
    const { id } = req.params;
     await deleteProductService(id);
    return res.status(204).send()
  } catch (err) {
    return res.status(400).json({message:err.message});
  }
};
export default deleteProductController;
