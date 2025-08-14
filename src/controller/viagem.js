import express from 'express';
import * as repoViagem from '../repositories/viagemRepository.js';

const endpoints = express();

endpoints.get('/viagem', async (req, res) => {
    try {
        const viagens = await repoViagem.filtrarViagem();
        res.json(viagens);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar viagens' });
    }
});

endpoints.get('/viagem/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const viagem = await repoViagem.consultarViagem(id);
        res.json(viagem);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar viagem' });
    }
});

endpoints.get('/viagem', async (req, res) => {
    try {
        const registros = await repoViagem.listarViagem();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar viagens' });
    }
});

endpoints.post('/viagem', async (req, res) => {
    try {
        const novaViagem = req.body;
        const id = await repoViagem.adicionarViagem(novaViagem);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar viagem' });
    }
});

endpoints.put('/viagem/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosViagem = req.body;
    try {
        await repoViagem.alterarViagem(id, novosDadosViagem);
        res.status(200).json({ message: 'Viagem atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar viagem' });
    }
});

endpoints.delete('/viagem/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await repoViagem.removerViagem(id);
        res.status(200).json({ message: 'Viagem removida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover viagem' });
    }
});


export default endpoints;
