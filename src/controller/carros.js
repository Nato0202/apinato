import express from 'express';
import * as repoCarro from '../repositories/carrosRepository.js';

const endpoint = express();

endpoint.get('/carros', async (req, res) => {
    try {
        const carros = await repoCarro.filtrarCarro();
        res.json(carros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar carros' });
    }
});

endpoint.get('/carros/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const carro = await repoCarro.consultarCarros(id);
        res.json(carro);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar carro' });
    }
});

endpoint.get('/carros', async (req, res) => {
    try {
        const registros = await repoCarro.listarCarros();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar carros' });
    }
});

endpoint.post('/carros', async (req, res) => {
    try {
        const novoCarro = req.body;
        const id = await repoCarro.adicionarCarros(novoCarro);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar carro' });
    }
});

endpoint.put('/carros/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosCarro = req.body;
    try {
        await repoCarro.alterarCarro(id, novosDadosCarro);
        res.status(200).json({ message: 'Carro atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar carro' });
    }
});

endpoint.delete('/carros/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await repoCarro.removerCarro(id);
        res.status(200).json({ message: 'Carro removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover carro' });
    }
});

export default endpoint;
