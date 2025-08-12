import express from 'express';
import { listarDesenho, adicionarDesenho, filtrarDesenho, consultarDesenho } from '../repositories/desenhoRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const desenhos = await filtrarDesenho();
        res.json(desenhos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar desenhos' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const desenho = await consultarDesenho(id);
        res.json(desenho);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar desenho' });
    }
});

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

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosDesenho = req.body;
    try {
        await alterarDesenho(id, novosDadosDesenho);
        res.status(200).json({ message: 'Desenho atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar desenho' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removerDesenho(id);
        res.status(200).json({ message: 'Desenho removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover desenho' });
    }
});

export default router;
