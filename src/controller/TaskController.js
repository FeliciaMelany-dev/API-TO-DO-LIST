class TaskController{
    static async getAll(req, res, next){
        try{
            res.status(200).send("Essa rota está funcionando")
        }catch(err){

        }
    }
}

export default TaskController;