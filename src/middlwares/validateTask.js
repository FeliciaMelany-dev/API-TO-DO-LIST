
//validação para PUT

class validate {

    static validIdParam(req, res, next){
        const {id} = req.params;

        if(!id){
            return res.status(400).json({error: "O ID é obrigatório na URL"})
        }

        const numericId = Number(id);
        if (isNaN(numericId) || numericId <= 0 || !Number.isInteger(numericId)) {

            return res.status(400).json({ error: "Formato de ID inválido. Deve ser um número inteiro positivo " })
        }
        next();
    }

    static validateTaskPost(req, res, next) {

        const { title, description, status } = req.body;

        if (!title || !description || !status) {
            return res.status(400).json({
                message: "Campos obrigatórios: title, description e status"
            });
            
        }
        next();
    }

    static validateTaskPut(req, res, next) {
         
        const { title, description, status } = req.body;

        if (!title || !description || !status) {
            return res.status(400).json({
                message: "Campos obrigatórios: title, description e status"
            });
            
        }

        next();
    }



    static validateTaskStatus(req, res, next) {
        const { id } = req.params

        if (!id) {
            res.status(400).json({ error: "ID obrigatorio" })
        }
        const numericId = Number(id);
        if (isNaN(numericId) || numericId <= 0 || !Number.isInteger(numericId)) {

            return res.status(400).json({ error: "Formato de ID inválido. Deve ser um número inteiro positivo " })
        }
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({
                message: "É necessário mandar o status da tarefa"
            });
        }

        const validStatus = ["pendente", "a_fazer", "concluida"];

        if (!validStatus.includes(status)) {
            return res.status(400).json({
                message: `Status inválido. Use: ${validStatus.join(",")}`
            })
        }

        next();
    }

}



export default validate;