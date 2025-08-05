import express from 'express';
import { listarPaciente, adicionarPaciente } from '../repositories/hospitalRepository.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const registros = await listarPaciente();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pacientes' });
    }
});

router.post('/', async (req, res) => {
    try {
        const novoPaciente = req.body;
        const id = await adicionarPaciente(novoPaciente);
        res.status(201).json({ newId: id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar paciente' });
    }
});

export default router;
