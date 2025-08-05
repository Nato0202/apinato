import express from 'express';
import { listarEstados, adicionarEstados } from '../repositories/estadosRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const registros = await listarEstados();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar estados' });
    }
});

router.post('/', async (req, res) => {
    try {
        const novoEstado = req.body;
        const id = await adicionarEstados(novoEstado);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar estado' });
    }
});

export default router;
