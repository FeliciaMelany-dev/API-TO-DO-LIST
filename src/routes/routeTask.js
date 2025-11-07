import { Router } from "express";
import TaskController from "../controller/TaskController.js";

const task = Router();

task.get('/', TaskController.getAll);
task.get('/:id', TaskController);
task.post('/', TaskController);
task.put('/:id', TaskController);
task.patch('/:id', TaskController);
task.delete('/:id', TaskController);


export default task;