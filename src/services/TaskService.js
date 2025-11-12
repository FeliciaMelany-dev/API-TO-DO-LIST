import database from '../database/models/index.js'
import { BadRequestError, NotFoundError, ValidationError } from "../middlwares/error.js";

class TaskService {
    async getAll() {
        try {
            const tasks = await database.Task.findAll();

            if (!tasks.length) {
                throw new Error('Nenhuma tarefa encontrada');
            }
            return tasks;

        } catch (err) {
            if (err instanceof NotFoundError || err instanceof ValidationError) {
                throw err;
            }
        }

        console.error('Erro ao buscar todas as tarefas:', err);
        throw new BadRequestError('Error ao acessar o banco de dados')
    };


    async getOne(id) {
        try {
            const task = await database.Task.findByPk(id);
            if (!task) {
                throw new NotFoundError(`Tarefa com id ${id} não encontrada`)
            }
            return task;

        } catch (err) {
            if (err instanceof NotFoundError) throw err;
            throw new BadRequestError(`Erro ao acessar o banco de dados.`)
        }
    }

    async taskCreate(title, description, status) {
        try {
            const validStatus = ['pendente', 'a_fazer', 'concluido']

            if (!validStatus.includes(status)) {
                throw new ValidationError(`Status invalido. O status precisa ser ${validStatus}`)
            }
            const newTask = await database.Task.create({
                title,
                description,
                status
            });
            return newTask;

        } catch (err) {

            if (err instanceof ValidationError) throw err;
            throw new BadRequestError('Erro ao acessar o banco de dados.');
        }
    }

    async updateAll(id, title, description, status) {
        try {
            if(!id) throw new ValidationError('O parâmetro "id" é obrigatório');

            if(!title || !description || !status ) throw new ValidationError ('Todos os campos são obrigatórios')

            const validStatus = ['pendente', 'a_fazer', 'concluido' ]
            if(!validStatus.includes(status)) throw new ValidationError(`Status inválido. Você precisa colocar ${validStatus}`);

            const task = await database.Task.findByPk(id);

            if(!task) throw new NotFoundError(`Tarefa com id ${id} não encontrada`);


            await database.Task.update(
                {title, 
                description, 
                status,
                updateAt: new Date()},
                {where: {id}}
            );
            return await this.getOne(id)

        } catch (err) {
            if(err instanceof ValidationError || err instanceof NotFoundError){ throw err};
            

            throw new BadRequestError('Erro ao atualizar tarefa')
        }
    }

    async updateOne(id, data) {
        try {
            const task = await database.Task.findByPk(id);

            if(!task) throw new NotFoundError(`Tarefa com id ${id} não encontrada`)

            await database.Task.update({ ...data, updatedAt: new Date() }, {where: {id}});
            return await this.getOne(id)

        } catch (err) {
            if (err instanceof NotFoundError) throw err;
            throw new BadRequestError('Erro ao atualizar a tarefa.');
        }
    }

    async taskDelete(id) {
        try {
            const task = await database.Task.findByPk(id);
            if(!task) throw new NotFoundError(`Tarefa com o id ${id} não encontrada`)

            await database.Task.destroy({ where: { id: id } });
            return {message: 'Tarefa deletada com sucesso'}
        } catch (err) {
            if (err instanceof NotFoundError) throw err;
            throw new BadRequestError('Erro ao deletar a tarefa.');
        }
    } 



}


export default TaskService;