import express from 'express';
import { listarViagem, adicionarViagem, filtrarViagem, consultarViagem } from '../repositories/viagemRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const viagens = await filtrarViagem();
        res.json(viagens);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar viagens' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const viagem = await consultarViagem(id);
        res.json(viagem);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar viagem' });
    }
});

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

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosViagem = req.body;
    try {
        await alterarViagem(id, novosDadosViagem);
        res.status(200).json({ message: 'Viagem atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar viagem' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removerViagem(id);
        res.status(200).json({ message: 'Viagem removida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover viagem' });
    }
});


export default router;
