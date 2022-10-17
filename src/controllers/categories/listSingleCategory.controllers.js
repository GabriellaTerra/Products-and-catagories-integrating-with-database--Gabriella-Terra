import listSingleCategoryService from "../../services/categories/listSingleCategory.services";

const listSingleCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const singleCategory = await listSingleCategoryService(id);
    return res.status(200).json(singleCategory);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
export default listSingleCategoryController;
