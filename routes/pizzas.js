import express from 'express';
import { listarPizzas, adicionarPizzas } from '../repositories/pizzasRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const registros = await listarPizzas();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pizzas' });
    }
});

router.post('/', async (req, res) => {
    try {
        const novaPizza = req.body;
        const id = await adicionarPizzas(novaPizza);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar pizza' });
    }
});

export default router;
