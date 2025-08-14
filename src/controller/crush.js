import express from 'express';
import * as repoCrush from '../src/repositories/crushRepository.js';

const endpoints = express();

endpoints.get('/crush', async (req, res) => {
    try {
        const registros = await repoCrush.filtrarCrush();
        res.json(registros);
    } catch (error) {

        res.status(500).json({ error: 'Erro ao buscar Crush' });
    }
});

endpoints.get('/crush/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const registro = await consultarCrush(id);
        res.json(registro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar Crush' });
    }
});

endpoints.get('/crush', async (req, res) => {
    try {
        const registros = await listarCrush();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar Crush' });
    }
});

endpoints.post('/crush', async (req, res) => {
    try {
        const novoCrush = req.body;
        const id = await adicionarCrush(novoCrush);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar Crush' });
    }
});

endpoints.put('/crush/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosCrush = req.body;
    try {
        await alterarCrush(id, novosDadosCrush);
        res.status(200).json({ message: 'Crush atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar Crush' });
    }
});

endpoints.delete('/crush/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removerCrush(id);
        res.status(200).json({ message: 'Crush removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover Crush' });
    }
});

export default endpoints;
