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

    async updateAll(id,title, description, status){
        try{
            const task = await database.Task.findByPk(id);

            if(!task){
                return null;
            }

            await database.Task.update();

        }catch(err){

        }
    }

    async updateOne(id, data){
        try{
            const task = await database.Task.findByPk(id);

            if(!task){
                throw new Error('Task não encontrada')
            }

            await database.Task.update({...data, updatedAt: new Date()});

            return task;
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