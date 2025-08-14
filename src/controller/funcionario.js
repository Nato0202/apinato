import express from 'express';
import * as repoFuncionario from '../repositories/funcionarioRepository.js';

const endpoints = express();

endpoints.get('/funcionarios', async (req, res) => {
    try {
        const funcionarios = await repoFuncionario.filtrarFuncionario();
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar funcionários' });
    }
});

endpoints.get('/funcionarios/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const funcionario = await repoFuncionario.consultarFuncionario(id);
        res.json(funcionario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar funcionário' });
    }
});

endpoints.get('/funcionarios', async (req, res) => {
    try {
        const registros = await repoFuncionario.listarFuncionarios();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar funcionários' });
    }
});

endpoints.post('/funcionarios', async (req, res) => {
    try {
        const novoFuncionario = req.body;
        const id = await repoFuncionario.adicionarFuncionarios(novoFuncionario);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar funcionário' });
    }
});

endpoints.put('/funcionarios/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosFuncionario = req.body;
    try {
        await repoFuncionario.alterarFuncionario(id, novosDadosFuncionario);
        res.status(200).json({ message: 'Funcionário atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar funcionário' });
    }
});

endpoints.delete('/funcionarios/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await repoFuncionario.removerFuncionario(id);
        res.status(200).json({ message: 'Funcionário removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover funcionário' });
    }
});

export default endpoints;
