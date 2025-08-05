import express from 'express';
import { listarDesenho, adicionarDesenho } from '../repositories/desenhoRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const registros = await listarDesenho();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar desenhos' });
    }
});

router.post('/', async (req, res) => {
    try {
        const novoDesenho = req.body;
        const id = await adicionarDesenho(novoDesenho);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar desenho' });
    }
});

export default router;
