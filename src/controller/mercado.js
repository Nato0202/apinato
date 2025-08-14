import express from 'express';
import * as repoMercado from '../repositories/mercadoRepository.js';

const endpoints = express();

endpoints.get('/mercados', async (req, res) => {
    try {
        const mercados = await repoMercado.filtrarMercado
        res.status(200).send(mercados);
        } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar mercados' });
    }
});
endpoints.get('/mercados/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const mercado = await repoMercado.consultarMercado(id);
        res.json(mercado);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar mercado' });
    }
});

endpoints.get('/mercados', async (req, res) => {
    try {
        const registros = await repoMercado.listarMercado();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar mercados' });
    }
});

endpoints.post('/mercados', async (req, res) => {
    try {
        const novoMercado = req.body;
        const id = await repoMercado.adicionarMercado(novoMercado);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar mercado' });
    }
});

endpoints.put('/mercados/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosMercado = req.body;
    try {
        await repoMercado.alterarMercado(id, novosDadosMercado);
        res.status(200).json({ message: 'Mercado atualizado com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar mercado' });
    }
});

endpoints.delete('/mercados/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await repoMercado.removerMercado(id);
        res.status(200).json({ message: 'Mercado removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover mercado' });
    }
});

export default endpoints;
