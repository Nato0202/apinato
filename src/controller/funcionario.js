import express from 'express';
import { listarFuncionarios, adicionarFuncionarios, filtrarFuncionario, consultarFuncionario } from '../src/repositories/funcionarioRepository.js';

const router = express();

router.get('/', async (req, res) => {
    try {
        const funcionarios = await filtrarFuncionario();
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar funcionários' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const funcionario = await consultarFuncionario(id);
        res.json(funcionario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar funcionário' });
    }
});

router.get('/', async (req, res) => {
    try {
        const registros = await listarFuncionarios();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar funcionários' });
    }
});

router.post('/', async (req, res) => {
    try {
        const novoFuncionario = req.body;
        const id = await adicionarFuncionarios(novoFuncionario);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar funcionário' });
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosFuncionario = req.body;
    try {
        await alterarFuncionario(id, novosDadosFuncionario);
        res.status(200).json({ message: 'Funcionário atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar funcionário' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removerFuncionario(id);
        res.status(200).json({ message: 'Funcionário removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover funcionário' });
    }
});

export default router;
