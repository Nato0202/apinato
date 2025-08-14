import express from 'express';
import repoPizzas from '../src/repositories/pizzasRepository.js';

const endpoints = express();

endpoints.get('/pizzas', async (req, res) => {
    try {
        const pizzas = await repoPizzas.listarPizzas();
        res.json(pizzas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pizzas' });
    }
});

endpoints.get('/pizzas/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const pizza = await repoPizzas.consultarPizzas(id);
        res.json(pizza);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pizza' });
    }
});

endpoints.get('/pizzas', async (req, res) => {
    try {
        const registros = await repoPizzas.listarPizzas();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pizzas' });
    }
});

endpoints.post('/pizzas', async (req, res) => {
    try {
        const novaPizza = req.body;
        const id = await repoPizzas.adicionarPizzas(novaPizza);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar pizza' });
    }
});

endpoints.put('/pizzas/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosPizza = req.body;
    try {
        await repoPizzas.alterarPizza(id, novosDadosPizza);
        res.status(200).json({ message: 'Pizza atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pizza' });
    }
});

endpoints.delete('/pizzas:id', async (req, res) => {
    const id = req.params.id;
    try {
        await repoPizzas.removerPizza(id);
        res.status(200).json({ message: 'Pizza removida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover pizza' });
    }
});

export default endpoints;
