import { Router } from "express";
import TaskController from "../controller/TaskController.js";

const task = Router();
const controller = new TaskController();

task.get('/', (req, res) => controller.getAll(req, res));
task.get('/:id', (req, res) => controller.getOne(req, res));
task.post('/', (req, res) => controller.taskCreat(req, res));
task.put('/:id', (req, res) => controller.updateAll(req, res));
task.patch('/:id', (req, res)=> controller.updateOne(req, res));
task.delete('/:id', (req, res) => controller.taskDelete(req, res));


export default task;