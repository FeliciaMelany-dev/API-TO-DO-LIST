import express from 'express';
import task from './routes/routeTask.js';
import { logger } from './middlwares/logger.js';

const app = express();

app.use(logger);
app.use(express.json());
app.use('/task', task);


app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    res.status(status).json({ error: err.message });
});

app.use((req, res, next) => {
  if (['PUT', 'PATCH', 'DELETE', 'GET'].includes(req.method) && /^\/task\/?$/.test(req.path)) {
    return res.status(400).json({ error: "O ID é obrigatório na URL." });
  }
  next();
});





export default app;