import express from 'express';
import { listarCarros, adicionarCarros, filtrarCarro, consultarCarros } from '../src/repositories/carrosRepository.js';

const router = express();

router.get('/', async (req, res) => {
    try {
        const carros = await filtrarCarro();
        res.json(carros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar carros' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const carro = await consultarCarros(id);
        res.json(carro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar carro' });
    }
});

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

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosCarro = req.body;
    try {
        await alterarCarro(id, novosDadosCarro);
        res.status(200).json({ message: 'Carro atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar carro' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removerCarro(id);
        res.status(200).json({ message: 'Carro removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover carro' });
    }
});

export default router;
