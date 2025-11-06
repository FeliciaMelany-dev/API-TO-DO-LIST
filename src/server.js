import app from "./app.js";

const PORT = 3000;


app.get('/', (req, res,) =>{
    res.status(200).send("Servidor de tarefas ON!")
});


app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta: ${PORT}`)
});
