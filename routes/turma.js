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

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosTurma = req.body;
    try {
        await alterarTurma(id, novosDadosTurma);
        res.status(200).json({ message: 'Turma atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar turma' });
    }
});
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removerTurma(id);
        res.status(200).json({ message: 'Turma removida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover turma' });
    }
});

export default router;
