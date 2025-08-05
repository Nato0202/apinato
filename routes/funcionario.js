import express from 'express';
import { listarFuncionarios, adicionarFuncionarios } from '../repositories/funcionarioRepository.js';

const router = express.Router();

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

export default router;
