
//validação para PUT

class validate{
    static validateTaskPut(req, res, next){
        const {title, description, status} = req.body;
    
    if(!title || !description || !status){
        return res.status(400).json({
            message: "Campos obrigatórios: title, description e status"
        });
    }
    next();
    }

    static validateTaskPatchStatus(req, res, next){
        const {status} = req.body;

    if(!status){
        return res.status(400).json({
            message: "É necessário mandar o status da tarefa"
        });
    }

    const validStatus = ["pendente", "a_fazer", "concluida"];

    if(!validStatus.includes(status)){
        return res.status(400).json({
            message: `Status inválido. Use: ${validStatus.join(",")}`
        })
    }

    next();
    }


}


export default validate;