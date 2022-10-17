import updateProductService from "../../services/products/updateProduct.services";

const updateProductController = async (req, res) => {
 
  try {
    const { id } = req.params;
    const data = req.body;
    const upDatedProduct = await updateProductService(id,data);

    return res.status(200).json( {message:"Product updated", product:upDatedProduct} );
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default updateProductController;
