import listSingleProductService from "../../services/products/listSingleProduct.services";

const listeSingleProductController = async (req,res) => {
const {id} = req.params

try{
    const singleProduct = await listSingleProductService(id)
    return res.status(200).json(singleProduct)
}catch(err){
  return res.status(400).json({message:err.message})
}

}
export default listeSingleProductController