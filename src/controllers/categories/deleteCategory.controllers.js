import deleteCategoryService from "../../services/categories/deleteCategory.services";

const deleteCategoryController = async (req, res) => {
 
  try {
    const { id } = req.params;
   await deleteCategoryService(id);
    return res.status(204).send()
  } catch (err) {
    return res.status(400).json({message:err.message});
  }
};
export default deleteCategoryController;
