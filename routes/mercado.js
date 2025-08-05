import express from 'express';
import { listarMercado, adicionarMercado } from '../repositories/mercadoRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const registros = await listarMercado();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar mercados' });
    }
});

router.post('/', async (req, res) => {
    try {
        const novoMercado = req.body;
        const id = await adicionarMercado(novoMercado);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar mercado' });
    }
});

export default router;
