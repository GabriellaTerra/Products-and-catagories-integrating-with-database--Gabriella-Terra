import database from "../../database";

const deleteCategoryService = async (id) => {
  try {
    await database.query("DELETE FROM categories WHERE id = $1 ", 
    [id]);

  } catch (err) {
    throw new Error(err);
  }
};
export default deleteCategoryService;
