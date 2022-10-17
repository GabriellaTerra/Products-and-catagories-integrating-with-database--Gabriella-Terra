import listCategorisServices from "../../services/categories/listCategories.services";

const listCategoryControllers = async (req,res) => {
 try{
    const categories = await listCategorisServices()
    return res.status(200).json(categories)
 }catch(err){
    return res.status(400).json({message:err.message})
 }
     
}
export default listCategoryControllers