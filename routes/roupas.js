import express from 'express';
import { listarRoupa, adicionarRoupa } from '../repositories/roupaRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const registros = await listarRoupa();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar roupas' });
    }
});

router.post('/', async (req, res) => {
    try {
        const novaRoupa = req.body;
        const id = await adicionarRoupa(novaRoupa);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar roupa' });
    }
});

export default router;
