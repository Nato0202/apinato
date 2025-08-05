import express from 'express';
import { listarCarros, adicionarCarros } from '../repositories/carrosRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const registros = await listarCarros();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar carros' });
    }
});

router.post('/', async (req, res) => {
    try {
        const novoCarro = req.body;
        const id = await adicionarCarros(novoCarro);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar carro' });
    }
});

export default router;
