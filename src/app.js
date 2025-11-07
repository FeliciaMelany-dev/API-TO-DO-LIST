import express from 'express';
import task from './routes/routeTask.js';

const app = express();

app.use(express.json());
app.use(task);






export default app;