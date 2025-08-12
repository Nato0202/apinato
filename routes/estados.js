import express from 'express';
import { listarEstados, adicionarEstados, filtrarEstados, consultarEstados } from '../repositories/estadosRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const estados = await filtrarEstados();
        res.json(estados);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar estados' });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const estado = await consultarEstados(id)
        res.json(estado)
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar estado' })
        }
});        
    
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

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosEstado = req.body;
    try {
        await alterarEstado(id, novosDadosEstado);
        res.status(200).json({ message: 'Estado atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar estado' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removerEstado(id);
        res.status(200).json({ message: 'Estado removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover estado' });
    }
});

export default router;
