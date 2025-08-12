import express from 'express';
import { listarPaciente, adicionarPaciente, filtrarHospital, consultarHospital } from '../src/repositories/hospitalRepository.js';

const router = express();

router.get('/pacientes', async (req, res) => {
    try {
        const pacientes = await filtrarHospital();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pacientes' });
    }
});

router.get('/pacientes/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const paciente = await consultarHospital(id);
        res.json(paciente);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar paciente' });
    }
});

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

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const novosDadosPaciente = req.body;
    try {
        await alterarPaciente(id, novosDadosPaciente);
        res.status(200).json({ message: 'Paciente atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar paciente' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removerPaciente(id);
        res.status(200).json({ message: 'Paciente removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover paciente' });
    }
});

export default router;
