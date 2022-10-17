import listProductCategoryService from "../../services/listProductCategory/listProductCategory.services";

const listProductCategoryController = async (req,res) => {
    
    try{
        const category_id = req.params.id
        const porductCategoryRelation = await listProductCategoryService(category_id)
        return res.status(200).json(porductCategoryRelation) 
    }catch(err){
        return res.status(400).json({message:err.message})
    }

}
export default listProductCategoryController