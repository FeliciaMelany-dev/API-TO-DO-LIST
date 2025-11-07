import database from '../models/index.js';

class TaskController{
    static async getAll(req, res, next){
        try{
            const listOfTasks = await database.Task.findAll();
            return res.status(200).json(listOfTasks);
        }catch(err){

        }
    }
}

export default TaskController;