import database from "../../database";

const listSingleProductService = async (id) => {

    
    const res = await database.query("SELECT * FROM products WHERE id = $1 ",[id])
    return res.rows[0]

   

}

export default listSingleProductService