import { Router } from "express";
import TaskController from "../controller/TaskController.js";
import validate from "../middlwares/validateTask.js";

const task = Router();
const controller = new TaskController();

task.get('/', (req, res) => controller.getAll(req, res));

task.get('/:id', validate.validIdParam, (req, res, next) => controller.getOne(req, res, next));

task.post('/', validate.validateTaskPost, (req, res, next) => controller.taskCreate(req, res, next));

task.put('/:id', validate.validIdParam, validate.validateTaskPut, (req, res, next) => controller.updateAll(req, res, next));

task.patch('/:id', validate.validIdParam, validate.validateTaskStatus, (req, res, next)=> controller.updateOne(req, res, next));

task.delete('/:id', validate.validIdParam, (req, res, next) => controller.taskDelete(req, res, next));


export default task;