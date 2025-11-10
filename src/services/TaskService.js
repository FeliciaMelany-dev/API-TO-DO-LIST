import database from '../models/index.js'

class TaskService {
    async getAll() {
        try {
            return await database.Task.findAll();

        } catch (err) {

        }
    };
    async getOne(id) {
        try {
            const task = await database.Task.findByPk(id);
            return task;
        } catch (err) {

        }
    }

    async taskCreat(title, description, status) {
        try {
            const newTask = await database.Task.create({
                title,
                description,
                status
            });
            return newTask;

        } catch (err) {

        }
    }

    async updateAll(title, description, status){
        try{

        }catch(err){

        }
    }

    async updateOne(){
        try{

        }catch(err){

        }
    }

    async taskDelete(id){
        try{
            await database.Task.destroy({where: {id: id}});
        }catch(err){

        }
    }



}


export default TaskService;