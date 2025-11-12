import TaskService from "../services/TaskService.js";

class TaskController {
    constructor() {
        this.taskService = new TaskService();
    }

    async getAll(req, res, next) {
        try {

            const tasks = await this.taskService.getAll()
            res.status(200).json(tasks);

        } catch (err) {
            next(err);
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params
        //console.log(id)
        try {
            const task = await this.taskService.getOne(id);

            res.status(200).json(task)

        } catch (err) {
            next(err);
        }
    }

    async taskCreate(req, res, next) {
        const { title, description, status } = req.body

        try {
            const newTask = await this.taskService.taskCreate(title, description, status);

            res.status(201).json(newTask);

        } catch (err) {
            next(err)
        }
    }

    async updateAll(req, res, next) {
        const { id } = req.params
        const { title, description, status } = req.body

        try {
            const UpdatedTask = await this.taskService.updateAll(id, title, description, status );
            
            res.status(200).json(UpdatedTask);

        } catch (err) {
            next(err)
        }
    }

    async updateOne(req, res, next) {
        const { id } = req.params
        const data = req.body
        try {
            const updateTask = await this.taskService.updateOne(id, data);
            res.status(200).json(updateTask);
        } catch (err) {
            next(err)
        }
    }

    async taskDelete(req, res, next) {
        const { id } = req.params
        try {
            await this.taskService.taskDelete(id);
            res.status(200).send('Deletado com sucesso')

        } catch (err) {
            next(err)
        }
    }

}

export default TaskController;