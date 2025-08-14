import { adicionarRotas } from './rotas.js';
import express from 'express';

const api = express();
api.use(express.json());

adicionarRotas(api);

api.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

api.listen(5010, () => console.log('API subiu com sucesso!'));