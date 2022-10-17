import createCategoryService from "../../services/categories/createCategory.services";

const createCategoryController = async (req,res) =>{
    
    try{
        const {name} = req.body
        const createdCategory = await createCategoryService(name)
    
        return res.status(201).json({message:"Category created", category: createdCategory })
        
    }catch(err){
        return res.status(400).json({message:err.message})
    }

}
export default createCategoryController