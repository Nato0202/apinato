import express from 'express';
import * as repoDesenho from '../repositories/desenhoRepository.js';

const endpoints = express();

endpoints.get('/crush', async (req, res) => {
    try {
        const desenhos = await repoDesenho.filtrarDesenho();
        res.json(desenhos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar desenhos' });
    }
});

endpoints.get('/crush/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const desenho = await repoDesenho.consultarDesenho(id);
        res.json(desenho);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar desenho' });
    }
});

endpoints.get('/crush', async (req, res) => {
    try {
        const registros = await repoDesenho.listarDesenho();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar desenhos' });
    }
});

endpoints.post('/crush', async (req, res) => {
    try {
        const novoDesenho = req.body;
        const id = await repoDesenho.adicionarDesenho(novoDesenho);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar desenho' });
    }
});

endpoints.put('/crush/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosDesenho = req.body;
    try {
        await repoDesenho.alterarDesenho(id, novosDadosDesenho);
        res.status(200).json({ message: 'Desenho atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar desenho' });
    }
});

endpoints.delete('/crush/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await repoDesenho.removerDesenho(id);
        res.status(200).json({ message: 'Desenho removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover desenho' });
    }
});

export default endpoints;
