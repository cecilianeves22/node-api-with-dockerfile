module.exports = (app) =>{


    const get = async (req, res) => {
        const categories = await app.database("categories").select("*");

        return res.json(categories);

    }

    const getById = async (req, res) => {

        const idCategory = req.params.id;

        const categoryExists= await app.database("categories").where({id: idCategory}).first();

        if(!categoryExists){
            return res.status(400).json({error: "Categoria não encontrada"})
        }

        const category = await app.database("categories").where({id: idCategory}).first();

        return res.json(category);
    }

    const save = async (req, res) => {
        const category = {... req.body};

        if(req.params.id){
            category.id = req.params.id
        }

        if(!category.name){
            return res.status(400).json({error: "Nome da categoria não informado"})
        }

        const categoryExists = await app
                .database("categories")
                .where({name: category.name})
                .first();
        if(categoryExists){
            return res.status(400).json({error: "A categoria já existe"})
        }

        category.image = "category.png";

        if(req.params.id){

           await  app
                .database("categories")
                .update(category)
                .where({id: category.id})
                .then(() => res.status(200).send())
                .catch((err) => res.status(500).send(err))
        }else{

        }

        await app
            .database("categories")
            .insert(category)
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))          
       
    }

    const remove = async (req, res) =>{

        const idCategory = req.params.id;
        if(!idCategory){
            return res.status(400).json({error: "Id da categoria não informado"})
        }


        const categoryExists= await app.database("categories").where({id: idCategory}).first();

        if(!categoryExists){
            return res.status(400).json({error: "Categoria não encontrada"})
        }

        await app.database("categories").where({id: idCategory}).del();

        res.status(204).send();
    }
    return {get, getById, save,remove}
}