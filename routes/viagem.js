import express from 'express';
import { listarViagem, adicionarViagem } from '../repositories/viagemRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const registros = await listarViagem();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar viagens' });
    }
});

router.post('/', async (req, res) => {
    try {
        const novaViagem = req.body;
        const id = await adicionarViagem(novaViagem);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar viagem' });
    }
});

export default router;
