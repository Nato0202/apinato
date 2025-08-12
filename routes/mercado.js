import express from 'express';
import { listarMercado, adicionarMercado, filtrarMercado, consultarMercado } from '../repositories/mercadoRepository.js';

const router = express.Router();

router.get('/mercados', async (req, res) => {
    try {
        const mercados = await filtrarMercado
        res.status(200).send(mercados);
        } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar mercados' });
    }
});
router.get('/mercados/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const mercado = await consultarMercado(id);
        res.json(mercado);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar mercado' });
    }
});

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

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosMercado = req.body;
    try {
        await alterarMercado(id, novosDadosMercado);
        res.status(200).json({ message: 'Mercado atualizado com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar mercado' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removerMercado(id);
        res.status(200).json({ message: 'Mercado removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover mercado' });
    }
});

export default router;
