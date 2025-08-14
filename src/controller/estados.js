import express from 'express';
import * as repoEstado from '../repositories/estadosRepository.js';

const endpoints = express();

endpoints.get('/crush', async (req, res) => {
    try {
        const estados = await repoEstado.filtrarEstados();
        res.json(estados);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar estados' });
    }
});


endpoints.get('/crush/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const estado = await repoEstado.consultarEstados(id)
        res.json(estado)
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar estado' })
        }
});        
    
endpoints.get('/crush', async (req, res) => {
    try {
        const registros = await repoEstado.listarEstados();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar estados' });
    }
});

endpoints.post('/crush', async (req, res) => {
    try {
        const novoEstado = req.body;
        const id = await repoEstado.adicionarEstados(novoEstado);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar estado' });
    }
});

endpoints.put('/crush/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosEstado = req.body;
    try {
        await repoEstado.alterarEstado(id, novosDadosEstado);
        res.status(200).json({ message: 'Estado atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar estado' });
    }
});

endpoints.delete('/crush/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await repoEstado.removerEstado(id);
        res.status(200).json({ message: 'Estado removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover estado' });
    }
});

export default endpoints;
