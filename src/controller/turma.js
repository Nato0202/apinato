import express from 'express';
import * as repoTurma from '../src/repositories/turmaRepository.js';

const endpoints = express();

endpoints.get('/turma', async (req, res) => {
    try {
        const registros = await repoTurma.filtrarTurma();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar turmas' });
    }
});

endpoints.get('/turma/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const turma = await repoTurma.consultarTurma(id);
        res.json(turma);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar turma' });
    }
});

endpoints.post('/turma', async (req, res) => {
    try {
        const novaTurma = req.body;
        const id = await repoTurma.adicionarTurma(novaTurma);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar turma' });
    }
});

endpoints.put('/turma/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosTurma = req.body;
    try {
        await repoTurma.alterarTurma(id, novosDadosTurma);
        res.status(200).json({ message: 'Turma atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar turma' });
    }
});
endpoints.delete('/turma/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await repoTurma.removerTurma(id);
        res.status(200).json({ message: 'Turma removida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover turma' });
    }
});

export default endpoints;
