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

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosPizza = req.body;
    try {
        await alterarPizza(id, novosDadosPizza);
        res.status(200).json({ message: 'Pizza atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pizza' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removerPizza(id);
        res.status(200).json({ message: 'Pizza removida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover pizza' });
    }
});

export default router;
