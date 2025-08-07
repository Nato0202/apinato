import express from 'express';
import { listarCrush, adicionarCrush, alterarCrush, removerCrush} from '../repositories/crushRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const registros = await listarCrush();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar Crush' });
    }
});

router.post('/', async (req, res) => {
    try {
        const novoCrush = req.body;
        const id = await adicionarCrush(novoCrush);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar Crush' });
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosCrush = req.body;
    try {
        await alterarCrush(id, novosDadosCrush);
        res.status(200).json({ message: 'Crush atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar Crush' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removerCrush(id);
        res.status(200).json({ message: 'Crush removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover Crush' });
    }
});

export default router;
