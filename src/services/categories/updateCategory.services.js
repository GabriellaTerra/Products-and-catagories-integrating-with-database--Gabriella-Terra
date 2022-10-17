import database from "../../database";

const upDateCategoryServices = async (id,name) =>{
try {
    const res = await database.query("UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
     [id,name]
    )
    if(res.rows.length === 0 ){
        throw "Could not find a category corresponding to this id"
    }
    return {message:"Categoria Atualizada", category:res.rows[0]}
}catch(err){
    throw new Error(err)
}
}
export default upDateCategoryServices