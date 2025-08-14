import express from 'express';
import * as repoRoupa from '../repositories/roupaRepository.js';

const endpoints = express();

endpoints.get('/roupas', async (req, res) => {
    try {
        const roupas = await repoRoupa.filtrarRoupa();
        res.json(roupas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar roupas' });
    }
});

endpoints.get('/roupas/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const roupa = await repoRoupa.consultarRoupa(id);
        res.json(roupa);
        } catch (error) {
            res.status(404).json({ error: 'Roupa não encontrada' });
    }
});

endpoints.get('/roupas', async (req, res) => {
    try {
        const registros = await repoRoupa.listarRoupa();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar roupas' });
    }
});

endpoints.post('/roupas', async (req, res) => {
    try {
        const novaRoupa = req.body;
        const id = await repoRoupa.adicionarRoupa(novaRoupa);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar roupa' });
    }
});

endpoints.put('/roupas/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosRoupa = req.body;
    try {
        await repoRoupa.alterarRoupa(id, novosDadosRoupa);
        res.status(200).json({ message: 'Roupa atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar roupa' });
    }
});

endpoints.delete('/roupas/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await repoRoupa.removerRoupa(id);
        res.status(200).json({ message: 'Roupa removida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover roupa' });
    }
});

export default endpoints;
