import express from 'express';
import { listarTurma, adicionarTurma } from '../repositories/turmaRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const registros = await listarTurma();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar turmas' });
    }
});

router.post('/', async (req, res) => {
    try {
        const novaTurma = req.body;
        const id = await adicionarTurma(novaTurma);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar turma' });
    }
});

export default router;
