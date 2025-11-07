import { Router } from "express";
import { TableHints } from "sequelize";

const task = Router();

task.get('/task', TaskController);
task.get('/task/:id', TaskController);
task.post('/task', TaskController);
task.put('/tasks/:id', TaskController);
task.patch('/task/:id', TaskController);
task.delete('/task/:id', TaskController);


export default task;