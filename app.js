import express from 'express';
import carrosRouter from './routes/carros.js';
import turmaRouter from './routes/turma.js';
import desenhoRouter from './routes/desenho.js';
import pizzasRouter from './routes/pizzas.js';
import estadosRouter from './routes/estados.js';
import funcionarioRouter from './routes/funcionario.js';
import hospitalRouter from './routes/hospital.js';
import mercadoRouter from './routes/mercado.js';
import roupasRouter from './routes/roupas.js';
import viagemRouter from './routes/viagem.js';

const api = express();
api.use(express.json());

api.use('/carros', carrosRouter);
api.use('/turma', turmaRouter);
api.use('/desenho', desenhoRouter);
api.use('/pizzas', pizzasRouter);
api.use('/estados', estadosRouter);
api.use('/funcionarios', funcionarioRouter);
api.use('/hospital', hospitalRouter);
api.use('/mercado', mercadoRouter);
api.use('/roupas', roupasRouter);
api.use('/viagem', viagemRouter);

api.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
api.listen(PORT, () => console.log(`API rodando na porta ${PORT}...`));
