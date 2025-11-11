import express from 'express';
import task from './routes/routeTask.js';
import validate from './middlwares/validateTask.js';

const app = express();

app.use(express.json());


app.use('/task', task);


app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    res.status(status).json({ error: err.message });
});





export default app;