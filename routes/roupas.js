import express from 'express';
import { listarRoupa, adicionarRoupa, filtrarRoupa, consultarRoupa } from '../repositories/roupaRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const roupas = await filtrarRoupa();
        res.json(roupas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar roupas' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const roupa = await consultarRoupa(id);
        res.json(roupa);
        } catch (error) {
            res.status(404).json({ error: 'Roupa não encontrada' });
    }
});

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

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosRoupa = req.body;
    try {
        await alterarRoupa(id, novosDadosRoupa);
        res.status(200).json({ message: 'Roupa atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar roupa' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removerRoupa(id);
        res.status(200).json({ message: 'Roupa removida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover roupa' });
    }
});

export default router;
